import { configureStore } from "@reduxjs/toolkit";
import scientificArticles from "./slice/scientificArticlesSlice";
import planetSlice from './slice/planetSlice'

export const state = configureStore({
   reducer: {
      planet: planetSlice,
      articles: scientificArticles
   }
})