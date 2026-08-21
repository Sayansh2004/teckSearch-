from fastapi import APIRouter
from fastapi import Depends, HTTPException, status

router=APIRouter(prefix="/auth/v1",tags=["auth"])


@router.post("/login")
async def login():
    pass

@router.post("/signup")
async def signup():
    pass

@router.post("/logout")
async def logout():
    pass