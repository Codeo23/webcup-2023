from datetime import datetime
from typing import List

from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable
from sqlalchemy import Column, DateTime, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from backend.db.base import Base


class UserModel(SQLAlchemyBaseUserTable[int], Base):
    """Model for users."""

    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(length=200))  # noqa: WPS432
    history: Mapped[List["HistoryModel"]] = relationship("History", secondary="user_history", back_populates="user")
    
class HistoryModel(Base):
    """History model."""
    
    __tablename__ = "history"
    
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    dream: Mapped[str] = mapped_column(String(length=200))
    interpretation: Mapped[str] = mapped_column(String(length=200))
    date: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    user: Mapped["UserModel"] = relationship("User", secondary="user_history", back_populates="history")

class UserHistory(Base):
    """ User's History model. """
    __tablename__ = "user_history"
    
    user_id = Column(ForeignKey("users.id"), primary_key=True)
    history_id = Column(ForeignKey("history.id"), primary_key=True)