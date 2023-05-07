from datetime import datetime
from pydantic import BaseModel

class HistoryRead(BaseModel):
    id: int
    date: datetime
    user_id: int
    dream: str
    interpretation: str
    class Config:
        orm_mode = True
        
class HistoryCreate(BaseModel):
    dream: str
    interpretation: str
    user_id: int
    class Config:
        orm_mode = True