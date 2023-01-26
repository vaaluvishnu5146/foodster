import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationC from "./Components/Navbar/Navbar";
import CartPage from "./Pages/CartPage";
import ListingPage from "./Pages/ListingPage";
import OrdersPage from "./Pages/OrdersPage";
import LoginPage from "./Pages/Public/LoginPage";
import SignupPage from "./Pages/Public/SignupPage";

function App() {
  return (
    <div className="App">
      <NavigationC />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/store" element={<ListingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;
