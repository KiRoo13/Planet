import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  transitionLink: "",
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
      console.log(response);
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
      window.open(response.data[0], '_blank');
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
      .addCase(getInformationPlanet.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.data = actions.payload.collection;
      })
      .addCase(getPlanetVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transitionLink = action.payload;
      })
      .addMatcher(
        isAnyOf(getInformationPlanet.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getInformationPlanet.rejected, getPlanetVideo.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { add } = planetSlice.actions;

export default planetSlice.reducer;

export { getInformationPlanet, getPlanetVideo };
