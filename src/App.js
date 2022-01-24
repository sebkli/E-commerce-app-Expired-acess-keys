import React from "react";
import { ShopProvider } from "./context/ShopContext";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import "./components/App.css";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <ShopProvider>
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:handle" element={<ProductPage />} />
        </Routes>
      </ShopProvider>
    </div>
  );
};

export default App;
