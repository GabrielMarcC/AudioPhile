import { useCart } from "@/Context/store";

type Items = Pick<Products, "id" | "name" | "price" | "img_product">;

export const useCartFunctions = () => {
  const {
    addItem,
    quantityItems,
    setQuantityItems,
    clearCart,
    incrementItem,
    decrementItem,
  } = useCart();

  const addItems = (item: Items) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantityItems,
      product_img: item.img_product,
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

  return { addItems, clearAll, quantityItems, increment, decrement };
};
