import {combineReducers} from "redux";
import selectedProductsReducer, {productReducer,} from "./productReducer";
import selectedOrdersReducer, {orderReducer} from "./orderReducer";
import selectedIphonesReducer,{iPhoneReducer} from "./iPhoneReducer";

import cartReducer from "../../Features/cartSlice";

const reducers = combineReducers({

    allProducts : productReducer,
    product: selectedProductsReducer,

    allOrders : orderReducer,
    order: selectedOrdersReducer,

    cart: cartReducer,


    iPhoneProducts : iPhoneReducer,
    iPhone :selectedIphonesReducer

})
export default reducers;
