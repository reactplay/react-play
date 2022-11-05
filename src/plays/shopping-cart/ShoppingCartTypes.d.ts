declare module "ShoppingCartTypes" {
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
}
