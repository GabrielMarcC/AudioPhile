import { useCart } from "@/Context/store";
import { Items } from "@/components/Details/Items";
import { useEffect } from "react";

type Items = Pick<Products, "id" | "name" | "price" | "img_product">;

export const useCartFunctions = () => {
  const {
    addItem,
    quantityItems,
    cartItems,
    setTotalItems,
    setQuantityItems,
    clearCart,
    incrementItem,
    decrementItem,
  } = useCart();

  useEffect(() => {
    let sumAllValues = cartItems.reduce(
      (acc, currentValue) => acc + currentValue.total,
      0
    );

    setTotalItems(sumAllValues);
  }, [cartItems, setTotalItems]);

  const addItems = (item: Items) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantityItems,
      product_img: item.img_product,
      total: quantityItems * item.price,
    });
  };

  const increment = () => {
    incrementItem();
    setQuantityItems(quantityItems + 1);
  };

  const decrement = () => {
    if (quantityItems > 0) {
      decrementItem();
      setQuantityItems(quantityItems - 1);
    }
  };

  const clearAll = () => {
    clearCart();
  };

  return {
    addItems,
    clearAll,
    increment,
    decrement,
    quantityItems,
  };
};
