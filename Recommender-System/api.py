from fastapi import FastAPI

from main import recommend, StudentProfile

app = FastAPI()


@app.post("/")
def recommend_modules(user_input: str):
    input = StudentProfile(interests=user_input)

    recommendations = recommend(input)
    return recommendations.to_dict(orient="records")
