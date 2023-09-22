import React from 'react';
import { useCartContext } from '../context';
import CartItem from './CartItem';

export default function Container() {
  const { cart, total, clearCart, reloadCart } = useCartContext();

  return (
    <section className="p-3 mx-auto my-0 mt-10 mb-12 text-center max-w-3xl sm:w-[90vw] lg:w-2/4">
      <header>
        <h2 className="mb-12 font-semibold text-center capitalize">Your Bag</h2>
      </header>

      <div>
        {cart.length >= 1 ? (
          cart.map((item: any) => {
            return <CartItem key={item.id} {...item} />;
          })
        ) : (
          <h2>No items present in the cart.</h2>
        )}
      </div>

      <footer className="mt-16 text-center">
        <hr className="border-transparent bg-cart-grey" />

        <div className="cart-total">
          <h4 className="flex justify-between mt-4 capitalize">
            total <span className="font-semibold">${total}</span>
          </h4>
        </div>

        {cart.length >= 1 ? (
          <button
            className="inline-block px-4 py-2 leading-4 text-red-500 uppercase transition duration-300 ease-linear bg-transparent border border-red-500 rounded-md cursor-pointer shadow-lightShadow mt-9 hover:bg-red-400 hover:text-red-900 hover:border-red-400"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        ) : (
          <button
            className="inline-block px-4 py-2 leading-4 text-blue-500 uppercase transition duration-300 ease-linear bg-transparent border border-blue-500 rounded-md cursor-pointer shadow-lightShadow mt-9 hover:bg-blue-400 hover:text-white hover:border-blue-400"
            onClick={() => reloadCart()}
          >
            Load Items Again
          </button>
        )}
      </footer>
    </section>
  );
}
