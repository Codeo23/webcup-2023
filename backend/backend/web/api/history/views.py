from typing import List

from fastapi import APIRouter, Depends, HTTPException, status

from backend.db.dao.history_dao import HistoryDAO
from backend.db.models.relationship import HistoryModel, UserModel
from backend.settings import settings
from backend.web.api.history.schema import HistoryRead
from backend.services.jwtauth import current_user

router = APIRouter()

@router.get("/", response_model=List[HistoryRead])
async def get_all_dreams(
    limit: int = 10,
    offset: int = 0,
    user: UserModel = Depends(current_user),
    historydao: HistoryDAO = Depends(),
) -> List[HistoryModel]:
    """Retrieve all dream objects from the database.

    Args:
        limit (int, optional): limit of the dream object. Defaults to 10.
        offset (int, optional): offset of the dream object. Defaults to 0.
        historydao (HistoryDAO, optional): DAO for the dream history. Defaults to Depends().

    Returns:
        List[HistoryModel]: List of the dream objects from the database.
    """
    return await historydao.get_all_dreams(limit=limit, offset=offset, user_id=user.id)


@router.post("/ask-a-dream")
async def ask_a_dream(
    dream: str,
    interpretation: str,
    user: UserModel = Depends(current_user),
    historydao: HistoryDAO = Depends(),
    ) -> None:
    """Create a dream history.

    Args:
        new_dream (HistoryCreate): new dream object.
        historydao (HistoryDAO, optional): DAO for History. Defaults to Depends().
    """
    await historydao.create_dream_history(dream=dream, interpretation=interpretation, user_id=user.id)