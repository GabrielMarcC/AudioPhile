import Image from "next/image";
import { useCart } from "../../Context/store";
import { CartBtn } from "./CartBtn";
import { formatPrice } from "@/utils/formatPrice";

export const CartProducts = () => {
  const { cartItems, totalItems } = useCart();

  return (
    <div>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((items) => {
            const formatedPrice = formatPrice(items.price);
            return (
              <div
                key={items.id}
                className="flex items-center justify-between  py-6 w-full gap-1"
              >
                <div className="flex justify-start items-center">
                  <div className="h-16 w-20 bg-light-gray flex items-center justify-center rounded-md">
                    <Image
                      src={items.product_img}
                      alt={items.name}
                      width={40}
                      height={40}
                      objectFit="contain"
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex flex-col  justify-center w-[100%] pl-3">
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
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-between py-6">
              <span className="text-[15px] uppercase font-medium  opacity-50">
                total
              </span>
              <span>{formatPrice(totalItems)}</span>
            </div>
            <button className="text-white bg-dark-orange text-[13px] font-bold uppercase h-12">
              checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[280px] mt-8 text-gray-500">
          Your cart is empty
        </div>
      )}
    </div>
  );
};
