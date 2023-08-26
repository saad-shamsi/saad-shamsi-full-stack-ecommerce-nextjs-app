import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductRedux } from "@/interface";
// import { Caramel } from "next/font/google";

interface CartState {
  items: Array<ProductRedux>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ product: ProductRedux; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalQuantity = state.totalQuantity + action.payload.product.price;
      if (!existingItem) {
        const totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },
    removeProdut(state: CartState, action: PayloadAction<string>) {
      const product = action.payload;
      state.items = state.items.filter((item) => item._id !== product);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    decrementCartProduct(state: CartState, action: PayloadAction<string>) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem?.price!;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== product);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem?.totalPrice! - existingItem?.price!;
      }
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
