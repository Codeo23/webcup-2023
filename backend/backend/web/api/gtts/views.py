import datetime

from fastapi import APIRouter
from gtts import gTTS

router = APIRouter()

@router.post("/generate")
async def generate_audio(text: str):
    """Generate audio from text."""
    
    # initialize gTTS
    tts = gTTS(text=text)
    
    # change filename to datetime
    filename = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    
    # save audio file
    tts.save(f"backend/static/{filename}.mp3")
    
    return {"filename": f"{filename}.mp3"}