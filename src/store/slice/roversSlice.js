import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

const initialState = {
   roversData: {},
   isLoading: false,
   error: null
}

const getRoversPhoto = createAsyncThunk(
   '@rovers/getRoversPhoto', 
   async (url) => {
      try {
         const response = await fetch(url)
         if (!response.ok) {
            throw new Error('Что то пошло не так!')
         }
         const data = await response.json()
         return data
      } catch (e) {
         isRejectedWithValue(e.massage)
      }
   }
   )

const roversSlice = createSlice({
   name: 'rovers',
   initialState,
   reducers: {
        add: () => null
   },
   extraReducers: (bulder) => {
     bulder.addCase(getRoversPhoto.pending, (state)=>{
        state.isLoading = true
        state.roversData = {}
        state.error = null
     })
     .addCase(getRoversPhoto.fulfilled, (state, actions) => {
        state.isLoading = false
        state.roversData = actions.payload.photos
        state.error = null
     })
     .addCase(getRoversPhoto.rejected, (state, actions)=>{
        state.isLoading = false
        state.roversData = {}
        state.error = actions.payload
     })
   }
})

export const { add } = roversSlice.actions 

export default roversSlice.reducer

export { getRoversPhoto }