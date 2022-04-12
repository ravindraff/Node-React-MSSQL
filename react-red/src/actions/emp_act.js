import axios from "axios";
export const increment =() =>{
    return{
        type:"INCREMENT"
    }
     
}
export const decrement =() =>{
    return{
        type:"DECREMENT"
    }
     
}
export const getEmployee =() =>{
    const {data} = axios.get("http://localhost:3000/getdata_withQuery");
    return{type:"Fetch",payload:data}
}
