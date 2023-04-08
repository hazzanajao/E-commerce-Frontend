import { ActionTypes } from "../constants/action-types"

/**
 * Our action-types will be implemented here
 ************************************************/

export const setOrders = (orders) =>{

    return {
        type: ActionTypes.SET_ORDERS,
        payload:orders
    }
}


export const selectedOrders = (order) =>{

    return {
        type: ActionTypes.SELECTED_ORDERS,
        payload:order
    }
}



const removeSelectedOrder = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_ORDER,
    }
}
export default removeSelectedOrder;
