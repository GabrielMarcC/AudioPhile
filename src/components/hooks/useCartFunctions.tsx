import { useCart } from "@/components/Context/store";

type Items = Pick<Products, "id" | "name" | "price" | "img_product">;

export const useCartFunctions = () => {
  const { addItem, quantityItems, setQuantityItems, cartItems } = useCart();

  const addItems = (item: Items) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantityItems,
      product_img: item.img_product,
    });
  };

  console.log(cartItems);

  const increment = () => {
    setQuantityItems(quantityItems + 1);
  };

  const decrement = () => {
    if (quantityItems > 0) {
      setQuantityItems(quantityItems - 1);
    }
  };

  return { addItems, increment, decrement, quantityItems };
};
