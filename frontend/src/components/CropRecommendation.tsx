import React, { useState } from "react";
import axios from "axios";

const CropRecommendation: React.FC = () => {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getRecommendations = async () => {
    setLoading(true);
    const res = await axios.get("/api/ai/recommend", {
      params: { location: "Lagos", soil_type: "Loamy", season: "Rainy" },
    });
    setRecommendations(res.data.recommendations);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={getRecommendations}>Get Crop Recommendations</button>
      {loading ? <div>Loading...</div> : (
        <ul>
          {recommendations.map(crop => <li key={crop}>{crop}</li>)}
        </ul>
      )}
    </div>
  );
};

export default CropRecommendation;