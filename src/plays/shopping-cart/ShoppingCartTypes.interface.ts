export type CartItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

export interface InitialState {
  loading: boolean;
  cart: CartItem[];
  total: number;
  amount: number;
}

export interface InitialContextState extends InitialState {
  clearCart: () => void;
  removeItem: (id: number) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  reloadCart: () => void;
}

export type CartProviderProps = {
  children: React.ReactNode;
};

export const enum REDUCER_ACTIONS {
  CLEAR_CART = 'CLEAR_CART',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
  GET_TOTALS = 'GET_TOTALS',
  LOADING_ITEMS = 'LOADING_ITEMS',
  RELOAD_CART = 'RELOAD_CART'
}
