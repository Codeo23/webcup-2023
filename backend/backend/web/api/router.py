from fastapi.routing import APIRouter

from backend.web.api import dummy, echo, gtts, history, monitoring, users

api_router = APIRouter()
api_router.include_router(monitoring.router)
api_router.include_router(echo.router, prefix="/echo", tags=["echo"])
api_router.include_router(dummy.router, prefix="/dummy", tags=["dummy"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(history.router, prefix="/history", tags=["history"])
api_router.include_router(gtts.router, prefix="/gtts", tags=["gtts"])
