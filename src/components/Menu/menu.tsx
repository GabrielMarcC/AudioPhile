import { LogoIcon } from "@/icons/logo-icon";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

type MenuProps = {
  bg?: string;
};

export const Menu = ({ bg }: MenuProps) => {
  return (
    <div
      className={`w-full flex-col justify-center pt-[14px] ${
        bg ? "bg-black" : "bg-inherit"
      }`}
    >
      <div className="w-full flex justify-between md:justify-start items-center">
        <div className="py-6 px-4 flex items-center w-[72%] justify-center md:w-[40%]">
          <div className="w-[50%] md:w-auto md:pr-3 flex">
            <GiHamburgerMenu color="#ffffff" size="20px" />
          </div>
          <div className="w-[65%] flex md:pl-2">
            <LogoIcon />
          </div>
        </div>
        <div className="py-6 px-4 flex items-center md:w-full md:justify-end md:pr-16">
          <AiOutlineShoppingCart color="#ffffff" size="20px" />
        </div>
      </div>
      <div className="w-full md:ml-10 md:w-[90%] h-[1px] bg-white opacity-20 flex justify-center items-center"></div>
    </div>
  );
};
