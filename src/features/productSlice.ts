import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com/products/";

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  rating: Rating;
}

const initialState = {
  products: [] as Product[],
  cart: [] as Product[],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>(api);
    const data = await response.data;
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: (builder) => {
    // The below types define the return type of the action as a Product[] array
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
