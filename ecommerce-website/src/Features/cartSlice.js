import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
     addToCart(state, action){
        const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

         if(itemIndex >= 0){
            state.cartItems[itemIndex].cartQuantity += 1
         }
         else {
             const temp_Product = { ...action.payload, cartQuantity:1}
             state.cartItems.push(temp_Product) // We are adding product
         }
     }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
