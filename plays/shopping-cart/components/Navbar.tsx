import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useCartContext } from '../context';

export default function Navbar() {
  const { amount } = useCartContext();

  return (
    <>
      <nav className="px-8 py-5 bg-cart-primary">
        <div className="flex items-center justify-between w-full max-w-4xl mx-auto my-0">
          <h3 className="mb-0 text-xl font-semibold">Checkout Page</h3>
          <div className="relative block">
            <BsFillCartFill className="w-8 h-8 text-gray-900" />
            <div className="absolute flex items-center justify-center bg-blue-400 border rounded-full -top-3 -right-3 w-7 h-7 bg-cart-primaryLight">
              <p className="mb-0 text-xl text-black">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
