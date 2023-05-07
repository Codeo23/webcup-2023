from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import UJSONResponse

from backend.settings import settings
from backend.web.api.router import api_router
from backend.web.lifetime import register_shutdown_event, register_startup_event

# create static folder
if Path("backend/static").exists() is False:
    Path("backend/static").mkdir(parents=True, exist_ok=True)

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

    return app