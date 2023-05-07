from pathlib import Path
import logging

from fastapi import FastAPI
from fastapi.responses import UJSONResponse
from fastapi.staticfiles import StaticFiles

from backend.settings import settings
from backend.web.api.router import api_router
from backend.web.lifetime import register_shutdown_event, register_startup_event

# create static folder
if Path("backend/static").exists() is False:
    Path("backend/static").mkdir(parents=True, exist_ok=True)
    
# Create a logger object.
logger = logging.getLogger(__name__)

# Configure the logger object to write to a file.
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler("debug.log")
handler.setFormatter(logging.Formatter("%(asctime)s %(levelname)s %(message)s"))
logger.addHandler(handler)

def get_app() -> FastAPI:
    """
    Get FastAPI application.

    This is the main constructor of an application.

    :return: application.
    """
    app = FastAPI(
        title="backend",
        version=settings.VERSION,
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
        default_response_class=UJSONResponse,
    )

    # Adds startup and shutdown events.
    register_startup_event(app)
    register_shutdown_event(app)

    # Main router for the API.
    app.include_router(router=api_router, prefix="/api")
    
    # mount static files
    app.mount("/static", StaticFiles(directory="backend/static"), name="static")

    return app
