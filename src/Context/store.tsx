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
  incrementItem: (itemId?: number) => void;
  decrementItem: (itemId?: number) => void;
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
  addItem: () => {},
  clearCart: () => {},
  setQuantityItems: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  quantityItems: 0,
});

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantityItems, setQuantityItems] = useState<number>(0);

  const addItem = (item: CartItem) => {
    const itemExists = cartItems.some(
      (existingItem) => existingItem.id === item.id
    );
    if (!itemExists) {
      setCartItems((prevItems) => [...prevItems, item]);
    }

    setQuantityItems(0);
  };

  const incrementItem = (itemId?: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (itemId?: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
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
        addItem,
        clearCart,
        quantityItems,
        setQuantityItems,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
