/* Reducer will always take the initial assigned state and actions*/

import ActionTypes from "../constants/action-types";

const initialState = {
products : [
    {
        id:1,
        name: "Lenovo Computer",
        description: "This is core i7 computer, suitable for high computational analysis",
        categories: "Computer",
        variant: "Available in all colors : Black, Silver and White",
        size : "15 inches"
    },

    ]
}

const productReducer = (state =initialState, {type, playload} ) => {
    switch (type){
        case ActionTypes.SET_PRODUCTS:
           return state;
        default:
            return state;
    }
}
export default productReducer;
