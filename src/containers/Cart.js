import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory } from "react-router-dom";
import {GetallProduct,RemoveProduct} from "../redux/actions/cartActions"
// import  "../cart.css"
const Cart = () => {
  const getuserinfo=JSON.parse(localStorage.getItem("userInfo"))
  let history=useHistory()
  const cartstate=useSelector((state) => state.getallcartproduct)
  const dispatch=useDispatch();
  useEffect(()=>{
    hi()
    // removeitem(id)
  },[])
  const hi=()=>{
    if(!getuserinfo){
      history.push("/register")  
    }else{
      dispatch(GetallProduct(getuserinfo.useremail))

    }
  }
  const removeitem=(id)=>{
    dispatch(RemoveProduct(id))
  }
  const rendercart=()=>{
    let cartList
    if(cartstate){
       cartList=(cartstate.payload).map((item)=>{
        const {image,price,qty,title}=item.cartitems
        const id=item.id
        return(
          <div className="d-flex col-9 pt-2 pb-4 m-auto" style={{borderBottom:"2px solid gray"} }> 
          <div className="img col-2">
            <img style={{maxWidth:"50%"}} className="img-fluid" src={image}/>
          </div>
          <div className="title col-2">{title}</div>
          <div className="price col-2">{price}</div>
          <div className="qty col-2"> {qty}</div>
          <div className="action col-2"><button className="btn btn-danger" onClick={()=>{removeitem(id)}}>delete</button></div>
        </div> 
        // <div className="cartItem row align-items-start">
        //   <div className="col-3 mb-2">
        //     <img className="w-100" src={image} alt="art image"/>
        //   </div>
        //   <div className="col-5 mb-2">
        //     <h6 className="">{title}</h6>
        //     <p className="pl-1 mb-0">20 x 24</p>
        //     <p className="pl-1 mb-0">Matte Print</p>
        //   </div>
        //   <div className="col-2">
        //     <p className="cartItemQuantity p-1 text-center">{qty}</p>
        //   </div>
        //   <div className="col-2">
        //     <p id="cartItem1Price">{price}</p>
        //   </div>
        //   <hr/>
        // </div>
        )
      })
    }
    return(
      <div className="row ">
      {cartList}
      <div className="col-9 text-center m-auto">
          <button className="btn btn-primary w-50">CHECK OUT</button>
      </div>
    </div>
  //     <main id="cart" style="max-width:960px">
  // <div className="back"><a href="#">&#11178; shop</a></div>
  // <h1>Your Cart</h1>
  // <div className="container-fluid">
  //   <div className="row align-items-start">
  //     <div className="col-12 col-sm-8 items">
  //       {cartList}
  //     </div>
  //     <div className="col-12 col-sm-4 p-3 proceed form">
  //       <div className="row m-0">
  //         <div className="col-sm-8 p-0">
  //           <h6>Subtotal</h6>
  //         </div>
  //         <div className="col-sm-4 p-0">
  //           <p id="subtotal">$132.00</p>
  //         </div>
  //       </div>
  //       <div className="row m-0">
  //         <div className="col-sm-8 p-0 ">
  //           <h6>Tax</h6>
  //         </div>
  //         <div className="col-sm-4 p-0">
  //           <p id="tax">$6.40</p>
  //         </div>
  //       </div>
  //       <hr/>
  //       <div className="row mx-0 mb-2">
  //         <div className="col-sm-8 p-0 d-inline">
  //           <h5>Total</h5>
  //         </div>
  //         <div className="col-sm-4 p-0">
  //           <p id="total">$138.40</p>
  //         </div>
  //       </div>
  //       <a href="#"><button id="btn-checkout" className="shopnow"><span>Checkout</span></button></a>
  //     </div>
  //   </div>
  // </div>
  // </main>
  // <div className="d-flex col-9 pt-2 pb-4 m-auto" style={{borderBottom:"2px solid gray"} }> 
  //           <div className="img col-2">
  //             <img style={{maxWidth:"50%"}} className="img-fluid" src={image}/>
  //           </div>
  //           <div className="title col-2">{title}</div>
  //           <div className="price col-2">{price}</div>
  //           <div className="qty col-2"> {qty}</div>
  //           <div className="action col-2"><button className="btn btn-danger" onClick={()=>{removeitem(id)}}>delete</button></div>
  //         </div> 
    )
  }
  return (
  <div>{rendercart()} </div>
  );
};

export default Cart;







{/* 
          
                <div className="row ">
        {cartList}
        <div className="col-9 text-center m-auto">
            <button className="btn btn-primary w-50">CHECK OUT</button>
        </div>
      </div>
          
          */}