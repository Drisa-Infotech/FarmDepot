import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Register from "./pages/Register";
import VoiceAssistant from "./components/VoiceAssistant";
import "./App.css";

function App() {
  return (
    <Router>
      <VoiceAssistant />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;