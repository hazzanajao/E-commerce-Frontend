import React from "react";
import {useDispatch} from "react-redux";
import {Button, Card} from "@mui/material";
import {addToCart} from "../Features/cartSlice";
import {ProductTable} from "./ProductTable";
import {setProducts} from "../Redux/actions/productActions";


const {useSelector} = require("react-redux");

function AllProducts() {

    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();

    {/* 2: New concept for fetching data */}
    fetch( 'http://localhost:3000/products.json')
        .then(resp => resp.json())
        .then(data => dispatch(setProducts(data)))

    console.log("Products : ", products)



    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        products.push("/cart");
    }
    return (

        <div className="admin-panel">

            <div className="home-container">
                <div className="admin-text">
                    <h2>All Products</h2>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {products &&
                    products?.map((product) => (
                        <div key={product.sizes} className="product">
                            <h3>{product.name}</h3>
                            <h5>{product.category}</h5>
                            <h6 className="price">${product.price}</h6>
                            <img src={product.image} alt={product.name}/>
                            <div className="details">
                                <span>{product.description}</span>
                            </div>
                            <h4>{product.variants}</h4>
                            <h4>{product.sizes}</h4>
                            <a href="/cart">
                                <Button onClick={() => handleAddToCart(product)}>
                                    Add To Cart
                                </Button>
                            </a>
                        </div>
                    ))
                    }
                </div>

            </div>

        </div>
    );
}

export default AllProducts;
