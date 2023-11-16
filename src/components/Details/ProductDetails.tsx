import Image from "next/image";
import Link from "next/link";
import { Title } from "../Home/ui/Title";
import { Gallery } from "./Gallery";

type Props = {
  product: Products;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const ProductDetails = ({ product }: Props) => {
  return (
    <>
      <div className="flex justify-center  flex-col w-[100%] px-[24px] md:px-[40px] md:pt-[32px]">
        <div className="w-full flex flex-col md:flex-row md:justify-center">
          <div className="flex flex-col w-[50%]">
            <div className="text-black text-[15px] font-medium leading-[25px] opacity-50 flex items-start justify-start">
              <Link href={"/"} className="py-[16px]">
                Go Back
              </Link>
            </div>
            <div className="w-[327px] h-[327px] flex items-center justify-center md:w-[280px] md:h-[480px] bg-light-gray rounded-md">
              <Image
                src={product.img_product}
                alt={product.name}
                width={327}
                height={327}
                className="rounded-md  md:w-[300px] md:h-[300px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:w-[340px] md:items-start md:justify-center md:pt-[24px] ">
            {product.new ? (
              <h2 className="text-dark-orange text-[14px] font-normal tracking-[10px] uppercase leading-normal py-[32px]">
                new product
              </h2>
            ) : (
              ""
            )}
            <Title
              label={product.name + "headphones"}
              textColor="text-black"
              padding="py-[24px]"
            />
            <p className="text-black opacity-50 text-[15px] font-medium leading-[25px]">
              {product.description}
            </p>
            <span className="py-6 text-black font-bold tracking-[1.28px] uppercase text-[18px]">
              {product.price >= 1000
                ? formatter.format(product.price)
                : product.price}
            </span>
            <div className="flex items-center gap-4 pt-[30px]">
              <div className="flex justify-center items-center w-[120px] h-[48px] bg-light-gray">
                <button className="">-</button>
                <div className="px-5">0</div>
                <button className="">+</button>
              </div>
              <div className="w-[160px] h-[48px] flex items-center justify-center">
                <button className="bg-dark-orange text-white uppercase w-full h-full font-bold text-[13px]">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[100px] w-full">
          <Title label="Features" textColor="text-black" padding="py-6" />
          <p className="font-medium leading-[25px] text-black opacity-50">
            {product.features}
          </p>
        </div>
      </div>
      <Gallery product={product} />
    </>
  );
};
