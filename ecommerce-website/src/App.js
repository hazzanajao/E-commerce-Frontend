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
              </Routes>
          </BrowserRouter>
          <Footer/>
      </>
  );
}

export default App;
