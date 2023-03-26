import { ActionTypes } from "../constants/action-types"

/**
 * Our action-types will be implemented here
************************************************/

const setProducts = (products) =>{

    return {
        type: ActionTypes.SET_PRODUCTS, // The action type we want to perform
        payload:products                // the product data we need to get
    }
}
export default setProducts;

const selectedProducts = (product) =>{

    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
export default selectedProducts;
