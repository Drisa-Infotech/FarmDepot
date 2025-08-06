from pydantic import BaseModel
from typing import List, Optional

class ProductAd(BaseModel):
    id: int
    title: str
    description: str
    tags: List[str]
    price: float
    price_type: str
    price_unit: str
    condition: str
    images: List[str]
    featured: bool
    location: str
    zip_code: str
    address: str
    phone: str
    email: str
    whatsapp: str
    social_profiles: Optional[List[str]]
    seller_id: int

class User(BaseModel):
    id: int
    name: str
    email: str
    password: str
    phone: str
    whatsapp: str
    address: str