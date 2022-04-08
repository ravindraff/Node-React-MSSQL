import countReducer from "./emp_red";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    counter: countReducer,
})
export default allReducers