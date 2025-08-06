import React, { useState } from "react";
import axios from "axios";

const MarketPricePrediction: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [product, setProduct] = useState<string>("Maize");

  const getPrice = async () => {
    const res = await axios.get("/api/ai/market-price", { params: { product } });
    setPrice(res.data.price);
  };

  return (
    <div>
      <input value={product} onChange={e => setProduct(e.target.value)} />
      <button onClick={getPrice}>Get Market Price</button>
      {price && <div>Market Price: ₦{price}</div>}
    </div>
  );
};

export default MarketPricePrediction;