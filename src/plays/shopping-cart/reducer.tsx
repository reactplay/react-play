import { CartItem, InitialState } from "ShoppingCartTypes";

export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem: CartItem) => cartItem.id !== action.payload
        ),
      };

    case "INCREASE_AMOUNT":
      let increasedCart = state.cart.map((cartItem: CartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }

        return cartItem;
      });

      return { ...state, cart: increasedCart };

    case "DECREASE_AMOUNT":
      let decreasedCart = state.cart
        .map((cartItem: CartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }

          return cartItem;
        })
        .filter((cartItem: CartItem) => cartItem.amount !== 0);

      return { ...state, cart: decreasedCart };

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal: InitialState, cartItem: CartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "LOADING_ITEMS":
      return { ...state, loading: true };

    case "RELOAD_CART":
      return { ...state, cart: action.payload };
    default:
      break;
  }
}
