from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from main import recommend, StudentProfile

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
def recommend_modules(user_input: str):
    input = StudentProfile(interests=user_input)

    recommendations = recommend(input)
    return recommendations.to_dict(orient="records")
