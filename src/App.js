import './App.css';
import { incrementMe ,decrementMe,incrementBy10,incrementByNum,changeInput} from './slices/counterSlice';
import {useDispatch,useSelector} from "react-redux";  // very important redux question it is
import { useState } from 'react';
function App() {
 const [state,setState]= useState()
  const dispatch=useDispatch();
  const globalState=useSelector(function(state){  // this state here is the whole global state
     return state.counterReducer;
  });

const decrementIt=()=>{
  dispatch(decrementMe());
}

const incrementIt=()=>{
  dispatch(incrementMe());
 
}

const incrementBy10u=()=>{
  dispatch(incrementBy10());
 
}

const hadnleincrementByNum=()=>{
  //dispatch(incrementByNum(Number(globalState.input)));
  dispatch(incrementByNum(Number(state)));
}

const handleChange=(event)=>{
 // dispatch(changeInput(event.target.value));
 setState(event.target.value);

}
  return (
    <div className="App">

      <h1>Count - {globalState.value}</h1>
      <h1>Count - {globalState.name}</h1>

      <button onClick={incrementIt}>
        Increment
      </button>

      <button onClick={decrementIt}>
        Decrement
      </button>
    
      <button onClick={incrementBy10u}>
        Increment By 10
      </button>

      <button onClick={hadnleincrementByNum}>
        Increment By Num
      </button>

      <input type={"text"} onChange={handleChange} />

    </div>
  );
}

export default App;
