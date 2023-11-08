import { LogoIcon } from "@/icons/logo-icon";
import { Cart } from "../Cart/Cart";
import { Drawer } from "../Drawer/Drawer";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";
import { Title } from "../Home/ui/Title";

type MenuProps = {
  bg?: string;
  category?: string;
};

export const Menu = ({ bg, category }: MenuProps) => {
  return (
    <div
      className={`w-full flex-col justify-center pt-[14px] ${
        bg ? "bg-black" : "bg-inherit"
      }`}
    >
      <div className="w-full flex justify-between md:justify-center items-center lg:justify-center">
        <div className="py-6 px-4 flex items-center w-[100%] justify-center md:w-[100%] lg:w-[100%]">
          <div className="lg:w-[90%] w-full  flex items-center justify-between lg:justify-between ">
            <div className=" w-[34%] md:w-[50%] md:pr-3 md:pl-7 flex lg:hidden">
              <Drawer />
            </div>
            <div className="w-[65%] lg:w-auto  flex md:pl-2">
              <LogoIcon />
            </div>
            <div className="lg:w-full">
              <DesktopMenu />
            </div>
            <div className="py-6 px-4 flex items-center md:justify-end md:pr-11 lg:w-auto lg:p-0 xl:py-6 xl:px-4 xl:w-[5%]">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:ml-10 lg:ml-[4.5rem] xl:ml-24 md:w-[90%] h-[1px] bg-white opacity-20 flex justify-center items-center"></div>
      {category && (
        <div className="w-full h-auto bg-black flex items-center justify-center p-8 md:px-[277px] md:pt-[195px] md:pb-[95px]">
          <Title label={`${category}`} size="lg:text-[40px]" />
        </div>
      )}
    </div>
  );
};
