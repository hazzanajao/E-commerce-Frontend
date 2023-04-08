{/*import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { setProducts } from "../Redux/actions/productActions";
import AllProducts from "./AllProducts";

function ProductList(){

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    {/*1 Previously implemented solution, using useEffect, working well but avoided using useEffect
    const fetchProducts = async () => {
        const response = await axios
            .get("http://localhost:3000/products.json")
            .catch((err) => {
                console.log("Err: ", err)
            })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    */}

    {/* 2: New concept for fetching data
    fetch( 'http://localhost:3000/products.json')
        .then(resp => resp.json())
        .then(data => dispatch(setProducts(data)))

    console.log("Products : ", products)

    return (
        <div className="product-container">
            <AllProducts />
        </div>
    )
}

export default ProductList;
// This page not needed to be removed
*/}
