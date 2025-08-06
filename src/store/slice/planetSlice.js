import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  video: [],
  isLoading: false,
  error: null,
};

const getInformationPlanet = createAsyncThunk(
  "@planet/getInformationPlanet",
  async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error("Что то пошло не так!");
      }
      console.log(response.data);
      console.log(response)
      return response.data;
    } catch (e) {
      isRejectedWithValue(e.massage);
    }
  }
);

const getPlanetVideo = createAsyncThunk(
  "@planet/getPlanetVideo ",
  async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error("Что то пошло не так!");
      }
      console.log(response.data);
      return response.data;
    } catch (e) {
      isRejectedWithValue(e.massage);
    }
  }
);

const planetSlice = createSlice({
  name: "rovers",
  initialState,
  reducers: {
    add: () => null,
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getInformationPlanet.pending, (state) => {
        state.isLoading = true;
        state.data = {};
        state.error = null;
      })
      .addCase(getInformationPlanet.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.data = actions.payload.collection;
        state.error = null;
      })
      .addCase(getInformationPlanet.rejected, (state, actions) => {
        state.isLoading = false;
        state.data = {};
        state.error = actions.payload;
      })
  },
});

export const { add } = planetSlice.actions;

export default planetSlice.reducer;

export { getInformationPlanet, getPlanetVideo };
