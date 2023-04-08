import { ActionTypes } from "../constants/action-types"

/**
 * Our action-types will be implemented here
************************************************/

export const setProducts = (products) =>{

    return {
        type: ActionTypes.SET_PRODUCTS, // The action type we want to perform
        payload:products                // the product data we need to get
    }
}


export const selectedProducts = (product) =>{

    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
}



const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}
export default removeSelectedProduct;
