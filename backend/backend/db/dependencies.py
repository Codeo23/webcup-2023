from typing import AsyncGenerator

from fastapi import Depends
from fastapi_users.db import SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.requests import Request

from backend.db.models.relationship import UserModel


async def get_db_session(request: Request) -> AsyncGenerator[AsyncSession, None]:
    """
    Create and get database session.

    :param request: current request.
    :yield: database session.
    """
    session: AsyncSession = request.app.state.db_session_factory()

    try:  # noqa: WPS501
        yield session
    finally:
        await session.commit()
        await session.close()


async def get_user_db(session: AsyncSession = Depends(get_db_session)):
    yield SQLAlchemyUserDatabase(session, UserModel)
