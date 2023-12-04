"use client";

import { CartContextType, CartItem } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

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
      total: 0,
    },
  ],
  addItem: () => {},
  clearCart: () => {},
  setQuantityItems: () => {},
  setTotalItems: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  quantityItems: 0,
  totalItems: 0,
});

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantityItems, setQuantityItems] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const addItem = (item: CartItem) => {
    const itemExists = cartItems.some(
      (existingItem) => existingItem.id === item.id
    );
    if (!itemExists) {
      setCartItems((prevItems) => [...prevItems, item]);
      localStorage.setItem("item", JSON.stringify(item));
    }

    setQuantityItems(0);
  };

  const incrementItem = (itemId?: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.quantity > 0 ? item.quantity * item.price : 0,
            }
          : item
      )
    );
  };

  const decrementItem = (itemId?: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.quantity > 0 ? item.quantity * item.price : 0,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantityItems,
        totalItems,
        addItem,
        clearCart,
        setQuantityItems,
        setTotalItems,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
