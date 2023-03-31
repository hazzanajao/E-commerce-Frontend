import React from "react"
import {BrowserRouter, Routes, Route, Link, Redirect} from "react-router-dom"
import './main.css';
import Navbar from "./Components/NavBar/Navbar";
import Home from"./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import ComputerProduct from "./Components/ProductCategory/ComputerProduct";
import SignupForm from "./Components/SignupForm/SignupForm";
import Footer from "./Components/Footer/Footer";
import ProductList from"./Components/ProductList/ProductList";
import AllProducts from "./Components/AllProducts/AllProducts";
import AllOrders from "./Components/AllOrders/AllOrders";
import OrderList from "./Components/OrderList/OrderList";
import Cart from "./Components/Cart/Cart";
import Admin from "./Components/Dashboard/Admin";


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
