import Image from "next/image";
import Link from "next/link";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import { IGallery } from "@/types";
import { filterGallery } from "@/firebase/filterGallery";

export const ZX9Speaker = async ({ data }: { data: IGallery[] }) => {
  const filteredImgs = await filterGallery(data, "zx9");

  return (
    <div className="w-[327px] h-[600px] md:w-[680px] md:h-[720px] lg:w-[1110px] lg:h-[560px] rounded-lg bg-dark-orange flex  flex-col md:items-center relative">
      <div className=" w-[325px] md:w-[440px] h-[320px] md:h-[440px] rounded-[325px] md:rounded-[600px] border border-white border-opacity-40 flex items-center justify-center">
        <div className="w-[279px] h-[279px] md:w-[350px] md:h-[350px] md:rounded-[472px] rounded-[279px] border border-white border-opacity-40">
          <div className="flex items-center justify-center w-[270px] h-[300px] md:w-full  md:h-full z-10">
            <Image
              src={filteredImgs.no_bg_img}
              alt={filteredImgs.name}
              height={300}
              width={300}
              className="lg:w-[493px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full  justify-center items-center z-20 absolute top-[18.25rem] md:top-[22.25rem]">
        <h2 className="flex w-[80%] md:w-[50%] text-[40px] md:text-[56px] md:tracking-[2px] md:leading-[58px] font-bold leading-[40px] tracking-[1.286px] uppercase text-center text-white">
          {filteredImgs.name} speakers
        </h2>
        <div className="md:w-[60%]">
          <p className="text-white text-[15px] font-medium leading-6 opacity-75 p-6 text-center">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        </div>
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
  );
};
