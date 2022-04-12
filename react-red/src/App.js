import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, getEmployee } from "./actions/emp_act";

function App() {
  const count = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const state ={
    emp_name:"",
    emp_dept:""
  }
  const [emp,setemp] = useState(state)
  const onchanegeEvent=(e)=>{
    setemp({...emp,[e.target.name]:e.target.value})
  }
  const onSubmitEmp=()=>{
    console.log(emp)
  }
  return (
    <div className="App">
      <h1>Hello {count}</h1>
      <input type="text" onChange={(e)=>onchanegeEvent(e)} name="emp_name"/>
      <br />
      <input type="text" onChange={(e)=>onchanegeEvent(e)} name="emp_dept"/>
      <br />
      <button onClick={()=>onSubmitEmp()}>Submit</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      {count?<button onClick={()=>dispatch(decrement())}>-</button>:""}  
      <button onClick={()=>dispatch(getEmployee())}>GET</button>
    </div>
  );
}

export default App;
