import Image from "next/image";
import Link from "next/link";
import { SeeProductBtn } from "./ui/SeeProductBtn";

type Props = {
  product: Products;
};

export const ZX9Speaker = async ({ product }: Props) => {
  return (
    <div className="w-[327px] h-[600px] md:w-[680px] md:h-[720px] lg:w-[1110px] lg:h-[560px] rounded-lg bg-dark-orange flex  flex-col md:items-center relative">
      <div className="w-full h-full lg:bg-bg-zx9 bg-no-repeat md:bg-bg-zx9-mobile absolute  z-10"></div>
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center z-20">
        <div className="flex items-center lg:items-end justify-center w-[270px] h-[300px] lg:h-full lg:w-[50%]">
          <Image
            src={product.img_desktop}
            alt={product.name}
            height={300}
            width={300}
            className="md:h-[320px] lg:h-[410px]"
          />
        </div>
        <div className="lg:w-[50%] flex flex-col justify-center items-center lg:items-start lg:pl-36 md:pt-4">
          <h2 className="flex  w-[80%] md:w-[50%] text-[40px] md:text-[56px] md:tracking-[2px] md:leading-[58px] lg:text-left font-bold leading-[40px] tracking-[1.286px] uppercase text-center text-white">
            {product.name}
          </h2>
          <div className="md:w-[60%] lg:w-full">
            <p className="text-white text-[15px] font-medium leading-6 opacity-75 p-6 text-center lg:pl-0 lg:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
          </div>
          <div
            role="button"
            className="w-[160px] h-[48px] bg-black flex items-center justify-center mt-[39px] hover:bg-medium-gray"
          >
            <SeeProductBtn hover="lg:hover:bg-[#4C4C4C]">
              <Link href="/">see product</Link>
            </SeeProductBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
