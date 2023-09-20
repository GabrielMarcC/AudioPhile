import { LogoIcon } from "@/app/icons/logo-icon";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

type MenuProps = {
  opacity?: string;
};

export const Menu = ({ opacity }: MenuProps) => {
  return (
    <div
      className={`w-full flex-col justify-center bg-opacity-${opacity} bg-black pt-[14px]`}
    >
      <div className="w-full flex justify-between">
        <div className="py-6 px-4 flex items-center">
          <GiHamburgerMenu color="#ffffff" size="20px" />
        </div>
        <div className="flex items-center">
          <LogoIcon />
        </div>
        <div className="py-6 px-4 flex items-center">
          <AiOutlineShoppingCart color="#ffffff" size="20px" />
        </div>
      </div>
      <hr className="w-full opacity-10 " />
    </div>
  );
};
