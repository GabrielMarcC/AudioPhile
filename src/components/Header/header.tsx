import Link from "next/link";
import { SeeProductBtn } from "../Home/ui/SeeProductBtn";
import { Menu } from "../Menu/menu";

export const Header = () => {
  return (
    <header className="bg-hero-mobile bg-cover md:bg-hero-tablet md:bg-contain md:h-[960px] bg-no-repeat w-full h-[600px] flex flex-col">
      <Menu />
      <div className="w-full h-full md:h-[60%] md:justify-start md:w-[76%] md:m-auto flex flex-col justify-center items-center">
        <h3 className="uppercase text-center text-base font-[400] text-white-custom opacity-30 leading-normal tracking-[10px]">
          new product
        </h3>
        <h1 className="text-center pt-4 leading-10 md:leading-[58px] md:tracking-[2px] text-[36px] font-bold uppercase tracking-[1.28px] text-white-custom md:text-[56px]">
          xx99 mark ii headphones
        </h1>
        <div className="md:w-[400px]">
          <p className="text-white text-[15px] text-center  font-[500] leading-6 p-6 opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <SeeProductBtn bgcolor="bg-dark-orange" margin="mt-[20px]">
          <Link href="/">see product</Link>
        </SeeProductBtn>
      </div>
    </header>
  );
};
