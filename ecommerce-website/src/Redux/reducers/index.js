import {combineReducers} from "redux";
import selectedProductsReducer, {productReducer,} from "./productReducer";
import selectedOrdersReducer, {orderReducer} from "./orderReducer";
import cartReducer from "../../Features/cartSlice";

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductsReducer,
    cart: cartReducer,

    allOrders : orderReducer,
    order: selectedOrdersReducer,

})
export default reducers;
