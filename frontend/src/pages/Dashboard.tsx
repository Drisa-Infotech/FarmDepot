import React from "react";
import ProductListing from "../components/ProductListing";
import PostAdForm from "../components/PostAdForm";

const Dashboard: React.FC = () => (
  <div>
    <h2>Dashboard</h2>
    <PostAdForm />
    <ProductListing />
  </div>
);

export default Dashboard;