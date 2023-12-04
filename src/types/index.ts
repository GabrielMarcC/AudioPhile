import { Dispatch, SetStateAction } from "react";

export type CartItem = {
  id: number;
  quantity: number;
  price: number;
  name: string;
  product_img: string;
  total: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  quantityItems: number;
  totalItems: number;
  addItem: (item: CartItem) => void;
  clearCart: () => void;
  setQuantityItems: Dispatch<SetStateAction<number>>;
  setTotalItems: Dispatch<SetStateAction<number>>;
  incrementItem: (itemId?: number) => void;
  decrementItem: (itemId?: number) => void;
};
