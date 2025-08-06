def recommend_crop(location: str, soil_type: str, season: str):
    # Placeholder AI logic for crop recommendation
    # In production, replace with ML model or external API call
    if location.lower() == "lagos" and soil_type.lower() == "loamy":
        return ["Maize", "Cassava", "Vegetables"]
    elif season.lower() == "dry":
        return ["Millet", "Sorghum"]
    else:
        return ["Rice", "Yam", "Groundnut"]