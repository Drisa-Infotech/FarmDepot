import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios.get(`/api/ads/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        {product.images.map((img: string, idx: number) => (
          <img key={idx} src={img} alt={product.title} />
        ))}
      </div>
      <p>{product.description}</p>
      <h2>Price: ₦{product.price}</h2>
      <h3>Location: {product.location}</h3>
      <div>
        <h4>Contact:</h4>
        <p>Email: <a href={`mailto:${product.email}`}>{product.email}</a></p>
        <p>Phone: <a href={`tel:${product.phone}`}>{product.phone}</a></p>
        <p>WhatsApp: <a href={`https://wa.me/${product.whatsapp}`}>Chat on WhatsApp</a></p>
      </div>
    </div>
  );
};

export default ProductDetails;