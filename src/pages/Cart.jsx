import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state) => state)

  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce((acc,curr) => acc + curr.price, 0) );
  },[cart])

  return (
    <div >
      <div className="flex items-start justify-center max-w-6xl mx-auto p-8 pt-24 ">
        {
          cart.length > 0 
          ?
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex-1 lg:max-h-screen overflow-y-auto pr-4">
              {cart.map((item,index) => {
                return(
                  <CartItem key={item.id} item={item} itemIndex={index} />
                )
              })}
            </div>
            <div>
              <div>
                <p className="font-semibold uppercase text-sm text-green-700">Your Cart</p>
                <p className="text-4xl uppercase -mt-1 text-green-700 font-bold">SUMMARY</p>
                <p className="text-lg mt-3 text-[16px]">
                  <span className="font-semibold text-gray-700">Total Items: {cart.length}</span>
                </p>
              </div>
              <div className="text-lg text-gray-700 font-semibold">
                <p className="mb-1">Total Amount: <strong className="text-black">${totalAmount}</strong></p>
              </div>
                <button className="mt-4 bg-green-600 text-white py-2 px-4 w-full rounded hover:bg-green-700 transition duration-300 ">Checkout Now</button>
            </div>
          </div>
          : 
            <div className="felx items-center justify-center h-screen">
              <div className="flex flex-col items-center">
                <h1 className="text-gray-500 font-bold">Your cart is empty!!!!</h1>
                <Link to="/">
                  <button className="border border-gray-300 py-2 px-6 text-[14px] rounded-md text-white font-semibold mt-4 bg-green-600 hover:bg-green-700">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default Cart;
