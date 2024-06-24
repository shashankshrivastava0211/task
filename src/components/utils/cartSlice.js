import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "plan",
    initialState: {
        selectedPlan: null,
    },
    reducers: {
        selectPlan: (state, action) => {
            state.selectedPlan = action.payload;
        }
    }
});

export const { selectPlan } = cartSlice.actions;
export default cartSlice.reducer;
