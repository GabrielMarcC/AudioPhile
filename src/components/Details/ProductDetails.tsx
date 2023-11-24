"use client";

import Image from "next/image";
import Link from "next/link";
import { Title } from "../Home/ui/Title";
import { Gallery } from "./Gallery";
import { useCartFunctions } from "../hooks/useCartFunctions";
import { Items } from "./Items";
import { CartBtn } from "../Cart/CartBtn";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  product: Products;
};

export const ProductDetails = ({ product }: Props) => {
  const { addItems } = useCartFunctions();
  const format = formatPrice(product.price);
  return (
    <>
      <div className="flex justify-center items-center flex-col w-[100%]   lg:px-0 md:pt-[32px]">
        <div className="flex flex-col justify-center w-[80%] lg:w-[1110px] items-center md:flex-row md:justify-center lg:gap-[125px]">
          <div className="flex flex-col md:w-[50%] lg:w-[1110px]">
            <div className="text-black text-[15px] font-medium leading-[25px] opacity-50 flex items-start justify-start">
              <Link href={"/"} className="py-[16px] lg:pb-[56px] lg:pt-[69px]">
                Go Back
              </Link>
            </div>
            <div className="w-[327px] h-[327px] flex items-center justify-center md:w-[280px] md:h-[480px] lg:w-[540px] lg:h-[560px] bg-light-gray rounded-md">
              <Image
                src={product.img_product}
                alt={product.name}
                width={327}
                height={327}
                className="flex items-center justify-center rounded-md  md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[380px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  md:w-[340px] md:items-start md:justify-center md:pt-[24px] ">
            {product.new ? (
              <h2 className="text-dark-orange text-[14px] font-normal tracking-[10px] uppercase leading-normal py-[32px]">
                new product
              </h2>
            ) : (
              ""
            )}
            <Title
              label={product.name}
              textColor="text-black"
              padding="py-[24px]"
              size="text-[28px]"
            />
            <p className="text-black opacity-50 text-[15px] font-medium leading-[25px] ">
              {product.description}
            </p>
            <span className="py-6 text-black font-bold tracking-[1.28px] uppercase text-[18px]">
              {format}
            </span>
            <div className="flex items-center gap-4 pt-[30px]">
              <CartBtn />
              <div className="w-[160px] h-[48px] flex items-center justify-center">
                <button
                  className="bg-dark-orange text-white uppercase w-full h-full font-bold text-[13px]"
                  onClick={() => addItems(product)}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[100px]  flex flex-col lg:justify-between lg:items-center lg:flex-row w-[80%] lg:w-[1110px]  lg:gap-3">
          <div className="lg:w-[50%]">
            <div className="flex flex-col items-start justify-center lg:w-[100%]">
              <Title
                label="Features"
                textColor="text-black"
                padding="py-6"
                textAlign="lg:text-left"
              />
              <p className="font-medium leading-[25px] text-black opacity-50 lg:w-[100%]">
                {product.features}
              </p>
            </div>
          </div>
          <div className="lg:w-[30%]">
            <Items product={product} />
          </div>
        </div>
        <Gallery product={product} />
      </div>
    </>
  );
};
