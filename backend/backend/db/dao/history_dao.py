from typing import List, Optional

from fastapi import Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.db.dependencies import get_db_session
from backend.db.models.relationship import HistoryModel, UserHistory


class HistoryDAO:
    """Class for accessing History table."""
    
    def __init__(self, session: AsyncSession = Depends(get_db_session)):
        self.session = session

    # create a dream history
    async def create_dream_history(
        self,
        dream: str,
        interpretation: str,
        user_id: int,
        ) -> None:
        """Function for creating a dream history.

        Args:
            dream (str): the dream describes by the user
            interpretation (str): the interpretation from the app
            user_id (int): the user who created the dream
        """
        
        self.session.add(HistoryModel(dream=dream, interpretation=interpretation, user_id=user_id))
        
        # append the dream to the user's history
        self.session.add(UserHistory(user_id=user_id, history_id=HistoryModel.id))
        

    # get all dreams
    async def get_all_dreams(self, limit: int, offset: int) -> List[HistoryModel]:
        """
        Get all dreams models with limit/offset pagination.

        :param limit: limit of dreams.
        :param offset: offset of dreams.
        :return: stream of dreams.
        """
        raw_dreams = await self.session.execute(
            select(HistoryModel).limit(limit).offset(offset),
        )

        return list(raw_dreams.scalars().fetchall())