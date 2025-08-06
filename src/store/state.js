import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./slice/homePageSlice";
import planetSlice from './slice/planetSlice'

export const state = configureStore({
   reducer: {
      planet: planetSlice,
      loadHomePage: homePageSlice
   }
})