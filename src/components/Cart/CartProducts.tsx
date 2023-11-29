import Image from "next/image";
import { useCart } from "../../Context/store";
import { CartBtn } from "./CartBtn";
import { formatPrice } from "@/utils/formatPrice";

export const CartProducts = () => {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems !== null ? (
        <div>
          {cartItems.map((items) => {
            const formatedPrice = formatPrice(items.price);
            return (
              <div
                key={items.id}
                className="flex items-center justify-between gap-5 py-6"
              >
                <div className="flex justify-start items-center">
                  <div className="w-[64px] h-[64px] bg-light-gray flex items-center justify-center">
                    <Image
                      src={items.product_img}
                      alt={items.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-col items-start pl-4">
                    <span className="text-[15px] font-bold text-black">
                      {items.name}
                    </span>
                    <span className="text-[14px] font-bold text-black opacity-50">
                      {formatedPrice}
                    </span>
                  </div>
                </div>
                <CartBtn id={items.id} quantity={items.quantity} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-[350px] flex items-center justify-center">
          Your cart is empty
        </div>
      )}
    </div>
  );
};
