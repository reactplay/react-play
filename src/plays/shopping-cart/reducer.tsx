export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem: TCartItem) => cartItem.id !== action.payload
        ),
      };

    case "INCREASE_AMOUNT":
      let increasedCart = state.cart.map((cartItem: TCartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }

        return cartItem;
      });

      return { ...state, cart: increasedCart };

    case "DECREASE_AMOUNT":
      let decreasedCart = state.cart
        .map((cartItem: TCartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }

          return cartItem;
        })
        .filter((cartItem: TCartItem) => cartItem.amount !== 0);

      return { ...state, cart: decreasedCart };

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal: TInitialState, cartItem: TCartItem) => {
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

    case "DISPLAY_ITEMS":
      return { ...state, loading: false, cart: action.payload };

    case "RELOAD_CART":
      return { ...state, cart: action.payload };
    default:
      break;
  }
}

type TCartItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

type TInitialState = {
  loading: boolean;
  cart: TCartItem[];
  total: number;
  amount: number;
};
