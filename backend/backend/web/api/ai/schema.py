from pydantic import BaseModel

class gTTSchema(BaseModel):
    text: str
    lang: str