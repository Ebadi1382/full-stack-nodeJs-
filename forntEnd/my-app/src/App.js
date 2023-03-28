import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-4 text-center">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} >
            <Route path=":id" element={<Cart />} />
            </Route>
            <Route path="/product/:id" element={<DetailProduct />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
