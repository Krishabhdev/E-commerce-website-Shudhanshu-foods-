import React from "react";
import dustbin from "../components/dustbin.png";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Slices/CartSlice";
import { increamentQty,decreamentQty } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const ItemCart = ({id,name,qty,price,img}) => {

  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4">
        <img onClick={()=>{dispatch(removeFromCart({id,img,name,price,qty}));
          toast(`${name} Removed!`, {
            icon: '👋',
          })}} className="h-4 w-4 absolute right-6" src={dustbin} alt="" />


      <img
        src={img}
        alt="" className="w-[50px] h-[50px] "
      />

      <div className="Leading-2">
        <h2 className="font-bold text-gray-800">{name}</h2>

<div className="flex justify-center gap-12 items-center">
    <span className="text-green-500 font-bold">₹{price}</span>
        <div className="relative flex items-center max-w-[5rem] justify-center gap-2">
          <button onClick={()=> qty> 1 ? dispatch(decreamentQty({id})): qty=0} className="font-bold text-xl border rounded-lg w-[4vw] hover:bg-green-500 hover:text-white ">-</button>
          <span className="font-bold ">{qty}</span>
          <button onClick={()=> qty >= 1 ? dispatch(increamentQty({id})): qty=0} className="font-bold text-xl border rounded-lg w-[4vw] hover:bg-green-500 hover:text-white">+</button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default ItemCart;
