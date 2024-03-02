import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  allBrands: [],
};

const productsSlice = createSlice({
  name: "arrayProducts",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.allProducts = action.payload;
    },
    getValueBrands(state, action) {
      state.allBrands = action.payload;
    },
  },
});

export const { getAllProducts, getValueBrands } = productsSlice.actions;

export default productsSlice.reducer;
