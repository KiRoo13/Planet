import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
import axios from "axios";
import { findMp4LinkOrMp3 } from "../../utils/findMp4LinkOrMp3";
import { initLocalStorage, changelocalStorage } from "../../utils/MyLocalStorage";


const api = axios.create({
  validateStatus: (status) => status >= 200 && status < 300
});


const initialState = {
  data: initLocalStorage(),
  transitionLink: "",
  isLoading: false,
  error: null,
};



const getInformationPlanet = createAsyncThunk(
  "@planet/getInformationPlanet",
  async (url, { rejectWithValue }) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (e) {
      let errorMassage = null
      if(e) {
         switch (e.code) {
          case "ERR_NETWORK":
            errorMassage = 'Сервер ответил с ошибкой!';
            break;
          case 401:
          default:
            errorMassage = `Ошибка сервера`;
        }
      }
      return rejectWithValue(errorMassage)
    }
  }
);

const getPlanetVideoOrAudio = createAsyncThunk(
  "@planet/getPlanetVideo ",
  async (reqData, {rejectWithValue}) => {
    const { href, type } = reqData
    try {
      const response = await axios.get(href);
      window.open(findMp4LinkOrMp3(response.data, type), '_blank');
    } catch (e) {
      let errorMassage = null
      if(e) {
         switch (e.code) {
          case "ERR_NETWORK":
            errorMassage = 'Сервер ответил с ошибкой!';
            break;
          case 401:
          default:
            errorMassage = `Ошибка сервера`;
        }
      }
      return rejectWithValue(errorMassage)
    }
  }
);

const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {},
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



export default planetSlice.reducer;

export { getInformationPlanet, getPlanetVideoOrAudio };
