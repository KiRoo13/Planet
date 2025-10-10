import { configureStore } from "@reduxjs/toolkit";
import planetSlice from './slice/planetSlice'

export const state = configureStore({
   reducer: {
      planet: planetSlice,
   }
})