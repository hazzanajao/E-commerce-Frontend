import React from "react";
import { useDispatch } from "react-redux";
import {Button, Card} from "@mui/material";
import {addToCart} from "../Features/cartSlice";
import { ProductTable } from "./ProductTable";
import Admin from "./Admin";

const {useSelector} = require("react-redux");

function AllProducts(){

    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
        products.push("/cart");
    }
        return (

            <div className="admin-panel">

                    <div className="home-container">
                        <div className="admin-text">
                            <h6>User's Panel</h6>
                        </div>
                        <br/>
                        <div className="products">
                            { products &&
                                products?.map((product) => (
                                    <div  key={product.sizes} className="product">
                                        <h3>{product.name}</h3>
                                        <h5>{product.category}</h5>
                                        <h6 className="price">${product.price}</h6>
                                        <h3>{product.image}</h3>
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
