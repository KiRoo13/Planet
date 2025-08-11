import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
import { findMp4LinkOrMp3 } from "../../utils/findMp4LinkOrMp3";
import { initLocalStorage, changelocalStorage } from "../../utils/MyLocalStorage";



const initialState = {
  data: initLocalStorage(),
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
      return response.data;
    } catch (e) {
      isRejectedWithValue(e.massage);
    }
  }
);

const getPlanetVideoOrAudio = createAsyncThunk(
  "@planet/getPlanetVideo ",
  async (reqData) => {
    const { href, type } = reqData
    try {
      const response = await axios.get(href);
      if (response.status !== 200) {
        throw new Error("Что то пошло не так!");
      }
      window.open(findMp4LinkOrMp3(response.data, type), '_blank');
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
        changelocalStorage(actions.payload.collection)
      })
      .addCase(getPlanetVideoOrAudio.fulfilled, (state, action) => {
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
        isAnyOf(getInformationPlanet.rejected, getPlanetVideoOrAudio.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { add } = planetSlice.actions;

export default planetSlice.reducer;

export { getInformationPlanet, getPlanetVideoOrAudio };
