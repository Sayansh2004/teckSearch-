from sqlalchemy import Column, String, DateTime, ForeignKey, JSON, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
from uuid import uuid4

from models.user import Base

class ConversationHistory(Base):
    __tablename__ = "conversation_history"

    id = Column(String, primary_key=True, default=lambda: str(uuid4()))
    user_id = Column(String, ForeignKey("users.id"), nullable=False, index=True)

    # raw message log — list of {role, content, timestamp, lang, ...}
    messages = Column(JSON, default=list, nullable=True)

    summarised_history = Column(Text, nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # many conversation rows -> one user
    user = relationship("User", back_populates="conversations")