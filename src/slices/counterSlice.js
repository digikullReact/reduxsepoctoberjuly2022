import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"John Doe"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementMe:(state)=>{
   state.value=state.value+1;
    },

    decrementMe:(state)=>{
      state.value=state.value-1;
       },
    
   
  },
})

// Action creators are generated for each case reducer function
export const { incrementMe,decrementMe } = counterSlice.actions

export default counterSlice.reducer

// increment by 10 button