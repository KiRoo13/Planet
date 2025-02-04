import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";


const initialState = {
   data: [],
   isLoading: false,
   error: null
}

const getPhotoDays = createAsyncThunk(
   '@loadHomePage/getPhotoDays', 
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

const homePageSlice = createSlice({
   name: 'loadHomePage',
   initialState,
   extraReducers: (bulder) => {
        bulder.addCase(getPhotoDays.pending, (state)=>{
         state.isLoading = true
         state.data = []
         state.error = null
        })
        .addCase(getPhotoDays.fulfilled, (state, actions) => {
         state.isLoading = false
         state.data = actions.payload
         state.error = null
        })
        .addCase(getPhotoDays.rejected, (state, actions)=> {
         state.isLoading = false
         state.data = []
         state.error = actions.payload
        })
   }
})


export default homePageSlice.reducer

export { getPhotoDays }

// export const { setSate, getState } = homePageSlice.actions

