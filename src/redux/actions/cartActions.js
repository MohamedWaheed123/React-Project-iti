import axios from "axios";
import { ActionTypes } from "../constants/action-types";
export const GetallProduct=async(user)=>{
    const {data}=await axios
    .get(`http://localhost:3000/Carts?user=${user}`,
    )
    .catch((err) => {
      console.log("error: ", err);
    });
    return {
      type: ActionTypes.GETCARTPRODUCTS,
      payload:data
    };
}
export const RemoveProduct=async(id)=>{
  let {data}=await axios.delete(`http://localhost:3000/Carts/${id}`);
  return {
      type: ActionTypes.REMOVEPRODUCTFROMCART,
      payload:data
    };
}
export const updateProduct=async(values,id)=>{
    let {data}=await axios.put(`http://localhost:3000/Carts/${id}`,values)
    return {
        type: ActionTypes.UPDATEPRODUCTINTOCART,
        payload:data
      };
}
export const AddProduct=async(values)=>{
    let x;
    let products=await GetallProduct(values.user).then((res)=>{
        x=res.payload.find(x=>x.cartitems.id ===values.cartitems.id)
        })
        if(x){
            return updateProduct(values,parseInt(x.id))
            }else{
                const {data}=await axios
                        .post(`http://localhost:3000/Carts`,
                        values
                        )
                        .catch((err) => {
                        console.log("error here: ", err);
                        });
                    return {
                        type: ActionTypes.ADDPRODUCTINTOCART,
                        payload:data
                        };
            }  
}
