import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    arrayProducts: productsReducer,
  },
});

export default store;
