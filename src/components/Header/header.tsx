import { Menu } from "../Menu/menu";

export const Header = () => {
  return (
    <header className="bg-header-mobile bg-cover bg-no-repeat w-full h-[600px] flex flex-col">
      <Menu />
      <div className="flex flex-col items-center justify-center absolute top-[201px] w-[80%] left-[24px] min-w-[328px]">
        <h3 className="uppercase text-center text-base font-[400] text-white-custom opacity-30 leading-normal tracking-[10px]">
          new product
        </h3>
        <h1 className="text-center pt-4 leading-10 text-[36px] font-bold uppercase tracking-[1.28px] text-white-custom">
          xx99 mark ii headphones
        </h1>
        <p className="text-white text-[15px] text-center font-[500] leading-6 pt-6 opacity-75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="w-[168px] h-[48px] flex-shrink-0 px-6 py-4 flex items-center justify-center bg-dark-orange text-white uppercase text-[13px] font-bold tracking-[1px] mt-11 active:opacity-75">
          see product
        </button>
      </div>
    </header>
  );
};
