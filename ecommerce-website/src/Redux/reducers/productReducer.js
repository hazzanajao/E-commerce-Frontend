/* Reducer will always take the initial assigned state and actions*/

import {ActionTypes} from "../constants/action-types";

const initialState = {

products : [ ]
}

export const productReducer = (state =initialState, {type, payload} ) => {

    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }

}

const selectedProductsReducer = (state = {}, { type, payload }) => {

    console.log(type);

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }

}

export default selectedProductsReducer;
