import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { setProducts } from "../../Redux/actions/productActions";
import AllProducts from "../AllProducts/AllProducts";

function ProductList(){

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);


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

    console.log("Products : ", products)

    return (
        <div className="product-container">
            <AllProducts />
        </div>
    )
}

export default ProductList;
