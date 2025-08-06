import React from "react";
import CropRecommendation from "../components/CropRecommendation";
import MarketPricePrediction from "../components/MarketPricePrediction";
import ProductListing from "../components/ProductListing";

const Home: React.FC = () => (
  <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
    <h1 style={{ color: "#b21823" }}>Welcome to FARMDEPOT</h1>
    <CropRecommendation />
    <MarketPricePrediction />
    <ProductListing />
  </div>
);

export default Home;