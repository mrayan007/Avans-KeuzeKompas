from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# DTO's
from dto import InputDTO

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
def recommend_modules(input_dto: InputDTO):
    input = StudentProfile(interests=input_dto.interests)

    recommendations = recommend(input)
    return recommendations.to_dict(orient="records")
