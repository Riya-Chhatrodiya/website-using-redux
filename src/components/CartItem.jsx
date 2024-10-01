import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
      <div className="flex items-center justify-between m-4 p-3  bg-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-lg ">
        <div className="w-[140px] mr-4">
          <img src={item.image} alt="item-image" className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1 ml-5">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <h2 className="text-gray-600">{item.description.split(" ").slice(0,20).join(" ") + "..."}</h2>
          <div className="flex items-center justify-between mt-4">
            <p className="text-green-500 font-bold">${item.price}</p>
            <div onClick={removeFromCart} className="text-red-500 cursor-pointer p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-300 ease-in">
              <MdOutlineDelete size={24} />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default CartItem;
