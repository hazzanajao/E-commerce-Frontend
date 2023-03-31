import React from "react";
import { useDispatch } from "react-redux";
import {Button, Card} from "@mui/material";
import {addToCart} from "../../Features/cartSlice";
import ProductTable from "../ProductListTable/ProductTable";
import Admin from "../Dashboard/Admin";

const {useSelector} = require("react-redux");

function AllProducts(){

    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))

    }
        return (

            <div className="admin-panel" style={{display:"flex", marginTop:"25px"}}>
                <Admin/>

                    <div className="ProductList" style={{margin:"10px",  width:"100%"}}>
                        <div className="admin-text">
                        <h6>Admin Panel</h6>
                         </div>
                        <br/>
                        <ul className="grid grid-cols-4 gap-5">
                            {products.map((product) => (
                                <Card className="grid-card" key={product.sizes} style={{padding:"10px",width:"100%", backgroundColor:"lightblue"}}>
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

            </div>
        );


}
export default AllProducts;
