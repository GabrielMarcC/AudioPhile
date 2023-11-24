"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartProducts } from "./CartProducts";
import { useCartFunctions } from "../hooks/useCartFunctions";

export const Cart = () => {
  const { quantityItems } = useCartFunctions();

  return (
    <div className="w-full cursor-pointer">
      <label htmlFor="my_modal">
        <AiOutlineShoppingCart color="#ffffff" size="20px" />
      </label>
      <input type="checkbox" id="my_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-[327px] h-[488px]">
          <div className="flex justify-between items-center pt-8">
            <span className="text-black text-[18px] font-bold uppercase">
              Cart ({quantityItems})
            </span>
            <span className="font-medium text-[15px] underline opacity-50 text-black">
              Remove all
            </span>
          </div>
          <CartProducts />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal"></label>
      </div>
    </div>
  );
};
