import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/cartSlice';

const CardItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed Sucessfully");
  }

  return (
    <div >
      <div className='w-full flex items-center gap-8 py-6 border-b border-gray-300' >
        <div className="w-36 h-40 flex-shrink-0 flex items-center justify-center">
          <img src={item.image} className="w-full h-full object-contain" />
        </div>

        <div flex-1 flex flex-col gap-3>

          <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>

          <h1 className="text-sm text-gray-500 leading-relaxed line-clamp-3">{item.description}</h1>

          <div className="flex items-center justify-between mt-2">

            <p className="text-green-600 font-bold text-lg">${item.price}</p>


            <button
              onClick={removeFromCart}
              className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition-all duration-200 cursor-pointer"
            >
              <MdDelete size={22} />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardItem