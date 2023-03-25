import './App.css';
import { incrementMe ,decrementMe} from './slices/counterSlice';
import {useDispatch,useSelector} from "react-redux";  // very important redux question it is
function App() {
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
    
    </div>
  );
}

export default App;
