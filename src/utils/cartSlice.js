import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state)=> {
            state.items.length = 0;
        }
    }

})

//visual representation of the cartSlice
/* {
    actions: {additem: Function, removeItem: Function, clearCard: Function},
    reducer
}
    */

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;