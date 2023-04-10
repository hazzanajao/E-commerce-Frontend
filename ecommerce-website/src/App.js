import React, {useEffect, useState} from "react"
import {BrowserRouter, Routes, Route,Navigate, Link, Redirect} from "react-router-dom"
import './main.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import ComputerProduct from "./Components/ComputerProduct";
import SignupForm from "./Pages/SignupForm";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import AllProducts from "./Components/AllProducts";
import AllOrders from "./Components/AllOrders";
import OrderList from "./Components/OrderList";
import Cart from "./Components/Cart";
import Admin from "./Pages/Admin";
import IphoneProducts from "./Components/IphoneProducts";
import Login from "./Pages/Login";



function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:3200/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, []);


console.log(user)


  return (
      <>
          <Navbar user={user} />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}/>
                  <Route path="/index" element={user ? <Home user={user}/>: <Navigate to="/login"/>}/>
                  <Route path="/tvproduct" element={<ComputerProduct/>}/>
                  <Route path="/signupform" element={<SignupForm/>}/>
                  <Route path="/allproducts" element={<AllProducts/>}/>
                  <Route path="/allorders" element={<AllOrders/>}/>
                  <Route path="/orderList" element={<OrderList/>}/>
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="/admin" element={<Admin/>} />

                  <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
                  <Route path="/iPhoneProducts" element={<IphoneProducts/> } />
              </Routes>
          </BrowserRouter>
          <Footer/>
      </>
  );
}

export default App;

{/*Removed based on modification !
Removed usage as components earlier implemented and rendered it allproduct directly
  <Route path="/productList" element={<ProductList/>}/>
*/}
