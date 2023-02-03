import React from 'react';
import { CartItem as TCartItem } from '../ShoppingCartTypes.interface';
import { useCartContext } from '../context';

export default function CartItem(props: TCartItem) {
  const { id, img, title, price, amount } = props;

  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();

  return (
    <article className="flex justify-around mx-auto my-6 gap-x-6 ">
      <img alt={title} className="object-cover w-24 h-28" src={img} />

      <div className="flex flex-col items-start justify-center">
        <h4 className="mb-2 font-medium leading-normal">{title}</h4>
        <h4 className="font-normal text-cart-grey">${price}</h4>
        <button
          className="mt-2 text-sm leading-6 text-red-500 transition duration-300 ease-in bg-transparent border-none cursor-pointer hover:text-red-700"
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
      </div>

      <div>
        {/* UP ARROW - Increase Amount */}
        <button
          className="w-6 bg-transparent border-none cursor-pointer"
          onClick={() => increaseAmount(id)}
        >
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
          {/* <AiOutlineArrowUp className='w-4 h-4'/> */}
        </button>

        <p className="mb-0 text-xl leading-none text-center">{amount}</p>

        {/* DOWN ARROW - Decrease Amount*/}
        <button
          className="w-6 bg-transparent border-none cursor-pointer"
          onClick={() => decreaseAmount(id)}
        >
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
          {/* <AiOutlineArrowDown className='w-4 h-4'/> */}
        </button>
      </div>
    </article>
  );
}
