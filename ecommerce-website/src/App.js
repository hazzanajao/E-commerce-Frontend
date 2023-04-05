import React from "react"
import {BrowserRouter, Routes, Route, Link, Redirect} from "react-router-dom"
import './main.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import ComputerProduct from "./Components/ComputerProduct";
import SignupForm from "./Components/SignupForm";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import AllProducts from "./Components/AllProducts";
import AllOrders from "./Components/AllOrders";
import OrderList from "./Components/OrderList";
import Cart from "./Components/Cart";
import Admin from "./Components/Admin";


function App() {
  return (
      <>
          <Navbar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}/>
                  <Route path="/index" element={<Home/>}/>
                  <Route path="/tvproduct" element={<ComputerProduct/>}/>
                  <Route path="/signupform" element={<SignupForm/>}/>
                  <Route path="/productList" element={<ProductList/>}/>
                  <Route path="/allproducts" element={<AllProducts/>}/>
                  <Route path="/allorders" element={<AllOrders/>}/>
                  <Route path="/orderList" element={<OrderList/>}/>
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="/admin" element={<Admin/>} />
              </Routes>
          </BrowserRouter>
          <Footer/>
      </>
  );
}

export default App;
