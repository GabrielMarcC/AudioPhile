import Image from "next/image";
import { Card } from "./ui/Card";
import { Title } from "./ui/Title";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import Link from "next/link";
import { IGallery } from "@/types";
import { filterGallery } from "@/utils/filterGallery";

export const YX1Earphones = async ({ data }: { data: IGallery[] }) => {
  const filteredImgs = filterGallery(data, "yx1");
  console.log(filteredImgs);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-6">
      <Card margin="mt-[30px]">
        <Image
          src={filteredImgs.no_bg_img}
          alt={filteredImgs.name}
          width={320}
          height={200}
          className="rounded-lg"
          priority
        />
      </Card>
      <Card bgcolor="bg-light-gray" margin="mt-[24px]">
        <div className=" flex flex-col w-full h-full justify-center items-start pl-[25px]">
          <Title
            label={`${filteredImgs.name + " earphones"}`}
            textColor="text-black"
          />
          <SeeProductBtn
            bgcolor="bg-none"
            textColor="text-black"
            margin="mt-[32px]"
          >
            <Link href="/">see product</Link>
          </SeeProductBtn>
        </div>
      </Card>
    </div>
  );
};
