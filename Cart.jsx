import React, { useState } from "react";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import shoppingimg from "../components/shopping-cart.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce((total,item)=> total + item.qty * item.price, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`transition-all duration-500 z-50 p-5 fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white  justify-between ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }  `}
      >
        <div className="flex px-2  justify-between">
          <div className="my-2 text-xl font-bold text-gray-800">My Order</div>
          <button
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            type="button"
            className=" mx-20 lg:h-[40px] text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            X
          </button>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h1 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h1>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount : {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-18vw] my-2 " />
          <button onClick={()=> navigate("/success")} className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5 ">
            Checkout
          </button>
        </div>
      </div>
      <img
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className={` shadow-md fixed bottom-4 right-4 h-[50px] w-[50px] ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
        src={shoppingimg}
        alt=""
      />
    </>
  );
};

export default Cart;
