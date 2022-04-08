import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, getEmployee } from "./actions/emp_act";

function App() {
  const count = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      {count?<button onClick={()=>dispatch(decrement())}>-</button>:""}  
      <button onClick={()=>dispatch(getEmployee())}>GET</button>
    </div>
  );
}

export default App;
