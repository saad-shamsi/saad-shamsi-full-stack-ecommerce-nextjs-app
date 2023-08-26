import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import cartSlice from "./features/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// Infer  the `RootState` and `AppDispathch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: PostState, comments,users:UserState

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
