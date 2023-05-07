import datetime

from fastapi import APIRouter
from gtts import gTTS

import backend.web.api
from backend.settings import settings
from backend.web.api.gtts.schema import gTTSchema

router = APIRouter()

@router.post("/generate")
async def generate_audio(gtts: gTTSchema):
    """Generate audio from text."""
    
    # initialize gTTS
    tts = gTTS(text=gtts.text, lang=gtts.lang)
    
    # change filename to datetime
    filename = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    
    # save audio file
    tts.save(f"backend/static/{filename}.mp3")
    
    return {
        "filename": f"{filename}.mp3",
        "link": f"{settings.URL_ROUTE}/static/{filename}.mp3",
    }