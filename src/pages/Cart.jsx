import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CardItem from '../components/CardItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {
        cart.length > 0 ?
          (<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col">
              {
                cart.map((item, index) => {
                  return <CardItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="lg:col-span-1 ">
              <div >
                <div className="text-xl font-bold text-green-600">Your Cart</div>
                <div className="text-3xl font-bold text-green-600 mb-6">Summary</div>
                <p className="text-gray-700 font-medium">
                  <span className='font-medium text-gray-700'>Total items : {cart.length}</span>
                </p>
              </div>

              <div className="border-t border-gray-300 pt-5 mt-6 ">

                <p className="text-lg font-bold text-gray-800 mb-5">Total Amount : ${totalAmount}</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all duration-200 cursor-pointer">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>) :
          (
            <div className='flex justify-center items-center flex-col mt-5' >
              <h1 className='text-2xl font-medium'>Your Card Is Empty</h1>
              <NavLink to="/">
                <button
                  className="w-50 mt-4  bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all duration-200 cursor-pointer"
                >Shop Now</button>
              </NavLink>
            </div>
          )
      }
    </div >
  )
}

export default Cart