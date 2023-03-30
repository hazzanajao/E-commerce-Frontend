import React from "react";
import {Link} from "react-router-dom";
import {Card} from "@mui/material";

const {useSelector} = require("react-redux");

function AllProducts(){

    const products = useSelector((state) => state.allProducts.products);

        return (
            <div className="ProductList" style={{margin:"25px", width:"100%"}}>
                    <ul className="grid grid-cols-4 gap-10">
                    {products.map((product) => (
                            <Card key={product.sizes} style={{padding:"10px"}}>
                                <h1>{product.name}</h1>
                                <h3>{product.category}</h3>
                                <p>{product.description}</p>
                                <h4>{product.variants}</h4>
                                <h4>{product.sizes}</h4>
                            </Card>
                        ))
                    }
                    </ul>
            </div>
        );


}
export default AllProducts;
