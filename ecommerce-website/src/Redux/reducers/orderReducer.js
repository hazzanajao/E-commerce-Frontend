import {ActionTypes} from "../constants/action-types";

const initialState = {
    orders : [ ]
}

export const orderReducer = (state =initialState, {type, payload} ) => {
    switch (type){
        case ActionTypes.SET_ORDERS:
            return { ...state, orders: payload };
        default:
            return state;
    }
}

const selectedOrdersReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_ORDER:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_ORDER:
            return {};
        default:
            return state;
    }
}
export default selectedOrdersReducer;
