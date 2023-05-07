import datetime
import os

import replicate
from fastapi import APIRouter, HTTPException
from gtts import gTTS

from backend.settings import settings
from backend.web.api.ai.schema import gTTSchema

router = APIRouter()

# generate audio
@router.post("/generate_audio")
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
    

# generate image
@router.post("/generate_image")
async def generate_image(dream: str):
    """Generate image from text."""
    
    os.environ["REPLICATE_API_TOKEN"] = settings.REPLICATE_API_TOKEN
    
    replicate.Client(api_token=settings.REPLICATE_API_TOKEN)

    model = replicate.models.get("stability-ai/stable-diffusion")
    version = model.versions.get("db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
    output_url = version.predict(prompt=dream)[0]
    
    # return error if dream is empty
    if dream == "":
        raise HTTPException(
            status_code=400,
            detail="Dream cannot be empty.",
        )
    
    # return
    return {
        "image": output_url,
    }