"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartProducts } from "./CartProducts";
import { useCart } from "../../Context/store";
import { useCartFunctions } from "../../hooks/useCartFunctions";

export const Cart = () => {
  const { cartItems } = useCart();
  const { clearAll } = useCartFunctions();

  

  return (
    <div className="w-full">
      <label htmlFor="my_modal" className="cursor-pointer">
        <AiOutlineShoppingCart color="#ffffff" size="20px" />
      </label>
      <input type="checkbox" id="my_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-[327px] h-[488px]">
          <div className="flex justify-between items-center pt-8">
            <span className="text-black text-[18px] font-bold uppercase">
              Cart ({cartItems.length})
            </span>
            <button
              className="font-medium text-[15px] underline opacity-50 text-black"
              onClick={clearAll}
            >
              Remove all
            </button>
          </div>
          <CartProducts />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal"></label>
      </div>
    </div>
  );
};
