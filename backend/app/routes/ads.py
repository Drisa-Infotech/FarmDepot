from fastapi import APIRouter
from app.models import ProductAd

router = APIRouter()

ads_db = []

@router.post("/", response_model=ProductAd)
def post_ad(ad: ProductAd):
    ads_db.append(ad)
    return ad

@router.get("/", response_model=list[ProductAd])
def list_ads():
    return ads_db

@router.get("/{ad_id}", response_model=ProductAd)
def get_ad(ad_id: int):
    for ad in ads_db:
        if ad.id == ad_id:
            return ad
    return None