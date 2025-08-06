import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/ads").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Product Listings</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.title}</a>
            <span> ₦{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;