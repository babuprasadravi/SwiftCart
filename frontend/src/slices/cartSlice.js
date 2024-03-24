import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        :{cartItems : []},
};  

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.cartItems.find((x) => x._id === item._id);
            if (existingItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existingItem._id ? item : x); 
            } else {
                state.cartItems = [...state.cartItems, item];
            }

            // Calculate item price

            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));   

            // Calculate shipping price (if order price is greater than $100, shipping is free otherwise $10)
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
            // Calculate tax price (18% of total price)

            state.taxPrice = addDecimals(Number((0.18 * state.itemsPrice).toFixed(2)));                                                                                     

            // Calculate total price

            state.totalPrice = (
                Number(state.itemsPrice) + 
                Number(state.shippingPrice) + 
                Number(state.taxPrice)
            ).toFixed(2);

            localStorage.setItem("cart", JSON.stringify(state));

        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((x) => x.product !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;   