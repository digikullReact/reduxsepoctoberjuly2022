import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"John Doe",
  input:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementMe:(state)=>{
   state.value=state.value+1;
    },
    incrementBy10:(state)=>{
       state.value=state.value+10
    },

    incrementByNum:(state,action)=>{
     
    
      state.value=state.value+action.payload
      //state.value=state.value+Number(state.input);
   },

    decrementMe:(state)=>{
      state.value=state.value-1;
       },

    changeInput:(state,action)=>{
      state.input=action.payload

    }   
    
   
  },
})

// Action creators are generated for each case reducer function
export const { incrementMe,decrementMe,incrementBy10,incrementByNum ,changeInput} = counterSlice.actions

export default counterSlice.reducer

// increment by 10 button