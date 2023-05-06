from typing import List
from fastapi import APIRouter, Depends, HTTPException, status

from backend.db.models.relationship import HistoryModel
from backend.db.dao.history_dao import HistoryDAO
from backend.web.api.history.schema import HistoryRead, HistoryCreate

router = APIRouter()

@router.get("/{user_id}", response_model=List[HistoryRead])
async def get_all_dreams(
    user_id: int,
    limit: int = 10,
    offset: int = 0,
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
    return await historydao.get_all_dreams(limit=limit, offset=offset, user_id=user_id)