from fastapi import APIRouter
from app.models import User

router = APIRouter()

users_db = []

@router.post("/", response_model=User)
def register_user(user: User):
    users_db.append(user)
    return user

@router.get("/{user_id}", response_model=User)
def get_user(user_id: int):
    for user in users_db:
        if user.id == user_id:
            return user
    return None