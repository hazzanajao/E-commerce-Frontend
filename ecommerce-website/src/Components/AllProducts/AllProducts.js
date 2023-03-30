import React from "react";
import { useDispatch } from "react-redux";
import {Button, Card} from "@mui/material";
import {addToCart} from "../../Features/cartSlice";

const {useSelector} = require("react-redux");

function AllProducts(){

    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))

    }
        return (
            <div className="ProductList" style={{margin:"70px",  width:"100%"}}>
                    <ul className="grid grid-cols-3 gap-5">
                    {products.map((product) => (
                            <Card key={product.sizes} style={{padding:"10px",width:"100%", backgroundColor:"lightblue"}}>
                                <h1 style={{textAlign:"center"}}>{product.name}</h1>
                                <h3>{product.category}</h3>
                                <p>{product.description}</p>
                                <h4>{product.variants}</h4>
                                <h4>{product.sizes}</h4>
                                <Button style={{float:"right"}}
                                 onClick={ () => handleAddToCart(product) }>Add Product
                                </Button>
                            </Card>
                        ))
                    }
                    </ul>
            </div>
        );


}
export default AllProducts;
