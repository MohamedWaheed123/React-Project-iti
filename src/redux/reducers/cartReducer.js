import { ActionTypes } from "../constants/action-types";
export const  getalLproducts=(state=null,Action)=>{
    if(Action.type ==ActionTypes.GETCARTPRODUCTS){
        return {
            payload:Action.payload
        }
    }
    return state
}
export const  AddProduct=(state=null,Action)=>{
    if(Action.type ==ActionTypes.ADDPRODUCTINTOCART){
        return {
            payload:Action.payload
        }
    }
    return state
}
export const  RemoveProduct=(state=null,Action)=>{
    if(Action.type ==ActionTypes.REMOVEPRODUCTFROMCART){
        return {
            payload:Action.payload
        }
    }
    return state
}