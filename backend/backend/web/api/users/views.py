from typing import List

from fastapi import APIRouter, Depends
from fastapi_users import FastAPIUsers

from backend.db.dao.user_dao import UserDAO
from backend.db.models.user_model import UserModel
from backend.services.jwtauth import auth_backend, get_user_manager
from backend.web.api.users.schema import UserCreate, UserRead, UserUpdate

router = APIRouter()

fastapi_users = FastAPIUsers[UserModel, int](
    get_user_manager,
    [auth_backend],
)

router.include_router(
    fastapi_users.get_auth_router(auth_backend, requires_verification=True),
    prefix="/auth/jwt",
)

router.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
)

router.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
)

router.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
)

router.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate, requires_verification=True),
)


@router.get("/", response_model=List[UserRead])
async def get_user_model(
    limit: int = 10,
    offset: int = 0,
    user_dao: UserDAO = Depends(),
) -> List[UserModel]:
    """
    Retrieve all user objects from the database.

    :param limit: limit of user objects, defaults to 10.
    :param offset: offset of user objects, defaults to 0.
    :param user_dao: DAO for user models.
    :return: list of user objects from database.
    """
    return await user_dao.get_all_users(limit=limit, offset=offset)
