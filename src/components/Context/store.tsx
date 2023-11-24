"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

type CartItem = {
  id: number;
  quantity: number;
  price: number;
  name: string;
  product_img: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  clearCart: () => void;
  quantityItems: number;
  setQuantityItems: Dispatch<SetStateAction<number>>;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType>({
  cartItems: [
    {
      id: 0,
      name: "",
      price: 0,
      quantity: 0,
      product_img: "",
    },
  ],
  addItem: (item: CartItem) => {},
  clearCart: () => {},
  quantityItems: 0,
  setQuantityItems: () => {},
});

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantityItems, setQuantityItems] = useState<number>(0);

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        clearCart,
        quantityItems,
        setQuantityItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
