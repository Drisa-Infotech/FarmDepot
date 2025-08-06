import React, { useState } from "react";
import axios from "axios";

const PostAdForm: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    phone: "",
    email: "",
    whatsapp: "",
    images: [],
    // ...other fields
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/ads", form);
    alert("Ad posted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="whatsapp" placeholder="WhatsApp" onChange={handleChange} />
      {/* Add image upload and other fields */}
      <button type="submit">Post Ad</button>
    </form>
  );
};

export default PostAdForm;