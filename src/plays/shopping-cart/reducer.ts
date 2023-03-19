import { CartItem, InitialState, REDUCER_ACTIONS } from './ShoppingCartTypes.interface';

export default function reducer(state: InitialState, action: any) {
  switch (action.type) {
    case REDUCER_ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };

    case REDUCER_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((cartItem: CartItem) => cartItem.id !== action.payload)
      };

    case REDUCER_ACTIONS.INCREASE_AMOUNT: {
      const increasedCart = state.cart.map((cartItem: CartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }

        return cartItem;
      });

      return { ...state, cart: increasedCart };
    }

    case REDUCER_ACTIONS.DECREASE_AMOUNT: {
      const decreasedCart = state.cart
        .map((cartItem: CartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }

          return cartItem;
        })
        .filter((cartItem: CartItem) => cartItem.amount !== 0);

      return { ...state, cart: decreasedCart };
    }

    case REDUCER_ACTIONS.GET_TOTALS: {
      // eslint-disable-next-line prefer-const
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0
        }
      );

      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
    }

    case REDUCER_ACTIONS.LOADING_ITEMS:
      return { ...state, loading: true };

    case REDUCER_ACTIONS.RELOAD_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
}
