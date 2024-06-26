import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "plan",
    initialState: {
        selectedPlan: null,
        selectedAddOns: [],
    },
    reducers: {
        selectPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
        selectAddOns: (state, action) => {
            state.selectedAddOns = action.payload;
        },
    },
});

export const { selectPlan, selectAddOns } = cartSlice.actions;
export default cartSlice.reducer;
