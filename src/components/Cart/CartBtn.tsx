"use client";

import { useCartFunctions } from "../hooks/useCartFunctions";

type Props = {
  quantity?: number;
};

export const CartBtn = ({ quantity }: Props) => {
  const { quantityItems, decrement, increment } = useCartFunctions();
  return (
    <div className="flex justify-center items-center w-[120px] h-[48px] bg-light-gray">
      <button onClick={decrement}>-</button>
      <div className="px-5 text-black uppercase">
        {quantity ? quantity : quantityItems}
      </div>
      <button onClick={increment}>+</button>
    </div>
  );
};
