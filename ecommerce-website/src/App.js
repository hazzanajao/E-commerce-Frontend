import React from "react"
import {BrowserRouter, Routes, Route, Link, Redirect} from "react-router-dom"
import './main.css';
import Navbar from "./Components/NavBar/Navbar";
import Home from"./Components/Home/Home";
import About from "./Components/About/About"
import Layout from "./Components/Layout/Layout";
import TvProduct from "./Components/Cards/TvProduct";

function App() {
  return (
      <>
          <Navbar/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}/>
                  <Route path="/index" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/tvproduct" element={<TvProduct/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
