import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { Regist,getall } from "./userReducer";
import { getalLproducts,AddProduct,RemoveProduct } from "./cartReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: Regist,
  getallusers:getall,
  getallcartproduct:getalLproducts,
  addproductintocart:AddProduct,
  removeproductfromcart:RemoveProduct

});
export default reducers;