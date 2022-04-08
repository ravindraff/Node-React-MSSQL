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
export const getEmployee =(usr) =>{
    return{type:"Fetch",payload:usr}
}
