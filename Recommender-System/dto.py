from pydantic import BaseModel


class InputDTO(BaseModel):
    interests: str
