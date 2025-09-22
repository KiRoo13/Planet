import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  validateStatus: (status) => status >= 200 && status < 300,
});

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const getArticles = createAsyncThunk(
  "@scientificArticles/getArticles",
  async (url, { rejectWithValue }) => {
    try {
      const response = await api.get(`https://api.codetabs.com/v1/proxy?quest=https://ll.thespacedevs.com/2.2.0/launch/upcoming/`);
      console.log(response, 'testNewApi')
    } catch (e) {
      let errorMassage = null;
      if (e) {
        switch (e.code) {
          case "ERR_NETWORK":
            errorMassage = "Сервер ответил с ошибкой!";
            break;
          case 401:
          default:
            errorMassage = `Ошибка сервера`;
        }
      }
      return rejectWithValue(errorMassage);
    }
  }
);

const scientificArticles = createSlice({
  name: "PageArticles",
  initialState,
  extraReducers: (bulder) => {
    bulder
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
        state.data = {};
        state.error = null;
      })
      .addCase(getArticles.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.data = actions.payload;
        state.error = null;
      })
      .addCase(getArticles.rejected, (state, actions) => {
        state.isLoading = false;
        state.data = {};
        state.error = actions.payload;
      });
  },
});

export default scientificArticles.reducer;

export { getArticles };
