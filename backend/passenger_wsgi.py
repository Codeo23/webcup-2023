from a2wsgi import ASGIMiddleware
from backend.web.application import get_app

application = ASGIMiddleware(get_app())
