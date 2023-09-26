import Image from "next/image";
import Link from "next/link";
import { SeeProductBtn } from "./ui/SeeProductBtn";

export const ZX9Speaker = async () => {
  return (
    <div>
      <div className="w-[327px] h-[600px] rounded-lg bg-dark-orange flex  flex-col relative">
        <div className=" w-[325px] h-[320px] rounded-[325px] border border-white border-opacity-40 flex items-center justify-center">
          <div className="w-[279px] h-[279px] rounded-[279px] border border-white border-opacity-40">
            <div className="flex items-center justify-center w-[270px] h-[300px] z-10">
              <Image
                src="https://res.cloudinary.com/dduiscoif/image/upload/v1695564489/home/image-category-thumbnail-speakers_qe3jj0.png"
                alt="teste"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  justify-center items-center z-20 absolute top-[18.25rem]">
          <h2 className="flex w-[80%] text-[40px] font-bold leading-[40px] tracking-[1.286px] uppercase text-center text-white">
            zx9 speaker
          </h2>
          <p className="text-white text-[15px] font-medium leading-6 opacity-75 pt-6 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            obcaec
          </p>
          <div
            role="button"
            className="w-[160px] h-[48px] bg-black flex items-center justify-center mt-[39px] hover:bg-medium-gray"
          >
            <SeeProductBtn>
              <Link href="/">see product</Link>
            </SeeProductBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
