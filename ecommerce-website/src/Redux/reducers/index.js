import productReducer from "./productReducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
    allproducts : productReducer
})
export default reducers;
