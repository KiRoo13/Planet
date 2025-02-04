import { configureStore } from "@reduxjs/toolkit";
import roversSlice from './slice/roversSlice';
import homePageSlice from "./slice/homePageSlice";

export const state = configureStore({
   reducer: {
      rovers: roversSlice,
      loadHomePage: homePageSlice
   }
})