from dataclasses import dataclass
from typing import Optional, Tuple, Dict
import pandas as pd
import joblib
from sklearn.metrics.pairwise import cosine_similarity
import scipy.sparse as sp
import numpy as np

global tfidf, x, df

tfidf = joblib.load("recommender.pkl")
x = sp.load_npz("recommender.npz")
df = pd.read_csv("data/keuze-modules.csv")


@dataclass
class StudentProfile:
    interests: str
    study_credits: Optional[int] = None
    location: Optional[str] = None
    level: Optional[str] = None
    difficulty: Optional[float] = None


def profile_vector(profile: StudentProfile):
    return tfidf.transform([profile.interests])


def extract_numeric_series(series: pd.Series) -> pd.Series:
    s = series.astype(str).str.replace(",", ".", regex=False)
    nums = pd.to_numeric(s.str.extract(r"([0-9]+\.?[0-9]*)")[0], errors="coerce")
    return pd.Series(nums)


def constraint_score(
    row: pd.Series, profile: StudentProfile
) -> Tuple[float, Dict[str, str]]:
    scores = []
    reasons: Dict[str, str] = {}

    if profile.location:
        module_location = str(row["location"]).lower()
        preference = profile.location.lower()
        match = preference in module_location
        scores.append(1.0 if match else 0.0)
        reasons["location"] = (
            f"locatie {'past' if match else 'past niet'}: student = {profile.location}, module = {row['location']}"
        )
    else:
        reasons["location"] = "geen locatie voorkeur opgegeven"

    if profile.study_credits is not None:
        module_credits = extract_numeric_series(pd.Series([row["studycredit"]])).iloc[0]

        if pd.isna(module_credits):
            scores.append(0.5)
            reasons["study_credits"] = "studiepunten onbekend, neutrale score"
        else:
            match = module_credits == profile.study_credits
            scores.append(1.0 if match else 0.0)
            reasons["study_credits"] = (
                f"studiepunten {'past' if match else 'past niet'}: gewenst = {profile.study_credits}, module ={module_credits}"
            )
    else:
        reasons["studie_credits"] = "geen studiepunten constraint"

    if profile.level:
        module_level = str(row["level"]).lower()
        preference = profile.level.lower()

        match = preference in module_level
        scores.append(1.0 if match else 0.0)
        reasons["level"] = (
            f"nlqf niveau {'past' if match else 'past niet'}: gewenst = {profile.level}, module = {row['level']}"
        )
    else:
        reasons["level"] = "geen nlqf niveau opgegeven"

    if profile.difficulty is not None:
        difficulty = extract_numeric_series(
            pd.Series([row["estimated_difficulty"]])
        ).iloc[0]

        if pd.isna(difficulty):
            scores.append(0.5)
            reasons["difficulty"] = "moeilijkheid onbekend, neutrale score"
        else:
            match = difficulty <= profile.difficulty
            scores.append(1.0 if match else 0.0)
            reasons["difficulty"] = (
                f"moeilijkheid {'binnen' if match else 'boven'} niveau (~= {difficulty})"
            )
    else:
        reasons["difficulty"] = "geen moeilijkheid gegeven"

    if not scores:
        return 0.0, reasons

    return float(np.mean(scores)), reasons


def recommend(
    profile: StudentProfile,
    k: int = 3,
    alpha: float = 0.7,
    beta: float = 0.2,
    gamma: float = 0.1,
) -> pd.DataFrame:
    p_v = profile_vector(profile)
    content_scores = cosine_similarity(p_v, x).flatten()

    popularity_raw = extract_numeric_series(df["popularity_score"]).fillna(0.0)  # type: ignore
    popularity_scaled = (popularity_raw - popularity_raw.min()) / (
        popularity_raw.max() - popularity_raw.min() + 1e-9
    )

    rows = []

    for i, row in df.iterrows():
        c_s, reasons = constraint_score(row, profile)
        score = float(content_scores[i])  # type: ignore
        popularity_score = float(popularity_scaled.loc[i])

        final_score = alpha * score + beta * c_s + gamma * popularity_score

        rows.append(
            {
                "index": i,
                "module_title": row.get("name", ""),
                "location": row.get("location", ""),
                "final_score": final_score,
                "content_similarity": score,
                "constraint_score": c_s,
                "popularity_score": popularity_score,
                "reasons": reasons,
            }
        )

    recommendation = (
        pd.DataFrame(rows)
        .sort_values("final_score", ascending=False)
        .head(k)
        .reset_index(drop=True)
    )
    return recommendation
