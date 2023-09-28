import Image from "next/image";
import Link from "next/link";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import { Title } from "./ui/Title";
import { IGallery } from "@/types";
import { filterGallery } from "@/utils/filterGallery";
import { Card } from "./ui/Card";

export const ZX7Speaker = async ({ data }: { data: IGallery[] }) => {
  const filteredImgs = filterGallery(data, "zx7");

  return (
    <Card height="h-[320px]" position="relative" margin="mt-[47px]">
      <div className="w-[320px] h-[320px] custom:hidden">
        <Image
          src={filteredImgs.no_bg_img}
          alt={filteredImgs.name}
          width={320}
          height={320}
          className="rounded-lg"
        />
      </div>
      <div className="tablet:hidden md:w-[680px] h-[320px]">
        <Image
          src={filteredImgs.img_tablet}
          alt={filteredImgs.name}
          width={680}
          height={320}
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-[5rem] md:top-[7rem] left-[16px] md:left-[43px] flex flex-col">
        <Title label="zx7 speakers" textColor="text-black" />
        <SeeProductBtn
          bgcolor="bg-none"
          margin="mt-[32px]"
          textColor="text-black"
          border="border-black"
        >
          <Link href="/">see product</Link>
        </SeeProductBtn>
      </div>
    </Card>
  );
};
