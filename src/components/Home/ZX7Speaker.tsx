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
      <Image
        src={filteredImgs.no_bg_img}
        alt={filteredImgs.name}
        height={320}
        width={320}
        className="rounded-lg"
      />
      <div className="absolute top-[5rem] left-[16px] flex flex-col">
        <Title label="zx7 speakers" textColor="text-black" />
        <SeeProductBtn
          bgcolor="bg-none"
          margin="mt-[32px]"
          textColor="text-black"
        >
          <Link href="/">see product</Link>
        </SeeProductBtn>
      </div>
    </Card>
  );
};
