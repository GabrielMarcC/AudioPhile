"use client";

import { useCart } from "@/Context/store";
import { useCartFunctions } from "../../hooks/useCartFunctions";

type Props = {
  id?: number;
  quantity?: number;
};

export const CartBtn = ({ id, quantity }: Props) => {
  const { quantityItems, increment, decrement } = useCartFunctions();
  const { incrementItem, decrementItem } = useCart();

  return (
    <div>
      {id ? (
        <div className="flex justify-center items-center w-[96px] h-[37px] bg-light-gray">
          <button onClick={() => decrementItem(id)}>-</button>
          <div className="px-5 text-black uppercase">
            {quantity ? quantity - 1 : quantity}
          </div>
          <button onClick={() => incrementItem(id)}>+</button>
        </div>
      ) : (
        <div className="flex justify-center items-center w-[120px] h-[48px] bg-light-gray">
          <button onClick={() => decrement()}>-</button>
          <div className="px-5 text-black uppercase">{quantityItems}</div>
          <button onClick={() => increment()}>+</button>
        </div>
      )}
    </div>
  );
};
