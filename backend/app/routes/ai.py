from fastapi import APIRouter, Query

router = APIRouter()

@router.get("/recommend")
def recommend_crop(location: str = Query(...), soil_type: str = Query(...), season: str = Query(...)):
    # Dummy AI logic
    return {"recommendations": ["Maize", "Cassava", "Rice"]}

@router.get("/market-price")
def market_price(product: str = Query(...)):
    # Dummy price prediction
    return {"product": product, "price": 1200}