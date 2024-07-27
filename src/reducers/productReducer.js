import { createSlice } from "@reduxjs/toolkit";
import { dates } from "../util/dates";
import { searchtype } from "../util/searchtype";

const initialState = {
  allProducts: [], // Assume this gets populated with all products
  filteredProducts: [],
  dateQuery: "",
  typeQuery: "",
  searchQuery: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByDate: (state, action) => {
      state.dateQuery = action.payload;
      state.filteredProducts = state.allProducts.filter((product) =>
        dates.includes(action.payload) ? product.date === action.payload : true
      );
      state.allProducts = state.filteredProducts;
    },
    filterByType: (state, action) => {
      state.typeQuery = action.payload;
      state.filteredProducts = state.allProducts.filter((product) =>
        product.type.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log(state.filteredProducts);
    },
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
      console.log(state.searchQuery);
      state.filteredProducts = state.allProducts.filter((product) =>
        product.type.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { filterByDate, filterByType, searchProducts, setProducts } =
  productSlice.actions;

export default productSlice.reducer;
