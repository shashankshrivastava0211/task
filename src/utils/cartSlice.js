import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "plan",
    initialState: {
        selectedPlan: null,
        selectedAddOns: [],
        user: null,
    },
    reducers: {
        selectPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
        selectAddOns: (state, action) => {
            state.selectedAddOns = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { selectPlan, selectAddOns, addUser } = cartSlice.actions;
export default cartSlice.reducer;
