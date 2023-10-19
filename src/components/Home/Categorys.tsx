import { ArrowIcon } from "@/icons/arrow-icon";
import Image from "next/image";
import Link from "next/link";

type CategoryProps = {
    imgUrl: string,
    category: string
}

export const Categorys = ({imgUrl, category}: CategoryProps) => {
  return (
    <div className="flex flex-col pt-16 md:pt-0 items-center">
      <div className="flex flex-col w-[327px] lg:w-[350px]  md:w-[240px] h-[165px] items-center justify-center  bg-light-gray rounded-lg relative">
        <div className={`flex items-start justify-center`}>
          <Image
            src={imgUrl}
            alt={category}
            width={100}
            height={100}
            className={`absolute bottom-[104px] `}
            priority
          />
        </div>
        <div className="flex flex-col justify-end items-center h-[100%] pb-6">
          <span className="text-[15px] font-bold tracking-[1.071px] uppercase text-center">
            {category}
          </span>
          <div className="flex items-center justify-center p-2">
            <button>
              <Link
                href="/teste"
                className="uppercase text-[13px] opacity-50 tracking-[1px] font-bold hover:text-dark-orange"
              >
                shop
              </Link>
            </button>
            <div className="pl-4 cursor-pointer">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
