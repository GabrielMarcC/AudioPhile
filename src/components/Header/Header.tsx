import Link from "next/link";
import { SeeProductBtn } from "../Home/ui/SeeProductBtn";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  return (
    <header className="bg-hero-mobile bg-cover md:bg-hero-tablet lg:bg-hero-desktop md:bg-contain md:h-[960px] lg:h-[730px] desktopxl:h-[960px] bg-no-repeat w-full h-[600px] flex flex-col">
      <Menu />
      <div className="w-full h-full md:h-[60%] md:justify-start md:w-[76%] lg:w-[50%] desktopxl:w-[40%] lg:mt-16 lg:items-start md:m-auto lg:m-0 flex flex-col justify-center items-center lg:ml-[5.5rem] desktopxl:mt-56">
        <h3 className="flex uppercase text-center text-base font-[400] text-white-custom opacity-30 leading-normal tracking-[10px]">
          new product
        </h3>
        <h1 className="text-center lg:text-left pt-4 leading-10 md:leading-[58px] md:tracking-[2px] text-[36px] font-bold uppercase tracking-[1.28px] text-white-custom md:text-[56px]">
          xx99 mark ii headphones
        </h1>
        <div className="md:w-[400px]">
          <p className="text-white text-[15px] text-center lg:text-left lg:py-4 lg:p-0 font-[500] leading-6 p-6 opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <SeeProductBtn bgcolor="bg-dark-orange" margin="mt-[20px]" hover="lg:hover:bg-[#FBAF85]">
          <Link href="/">see product</Link>
        </SeeProductBtn>
      </div>
    </header>
  );
};
