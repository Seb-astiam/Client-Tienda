import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

const productsSlice = createSlice({
  name: "arrayProducts",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const { getAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
