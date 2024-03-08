import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  allBrands: [],
  favorites: []
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
    addFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload]
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((product) => product.id !== action.payload)
    }
  },
});

export const { getAllProducts, getValueBrands, addFavorite, removeFavorite } = productsSlice.actions;

export default productsSlice.reducer;
