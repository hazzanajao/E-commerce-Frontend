import React from "react"
import {BrowserRouter, Routes, Route, Link, Redirect} from "react-router-dom"
import './main.css';
import Navbar from "./Components/NavBar/Navbar";
import Home from"./Components/Home/Home";
import About from "./Components/About/About"
import Layout from "./Components/Layout/Layout";
import ComputerProduct from "./Components/Cards/ComputerProduct";
import SignupForm from "./Components/SignupForm/SignupForm";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <>
          <Navbar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}/>
                  <Route path="/index" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/tvproduct" element={<ComputerProduct/>}/>
                  <Route path="/signupform" element={<SignupForm/>}/>
              </Routes>
          </BrowserRouter>
          <Footer/>
      </>
  );
}

export default App;
