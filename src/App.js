import React from "react";
import Index from "./pages";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContainer from "./components/cart";

function App() {
  // cart setup

  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Index />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<CartContainer />}></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
