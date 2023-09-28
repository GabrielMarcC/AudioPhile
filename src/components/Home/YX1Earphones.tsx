import Image from "next/image";
import { Card } from "./ui/Card";
import { Title } from "./ui/Title";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import Link from "next/link";
import { IGallery } from "@/types";
import { filterGallery } from "@/utils/filterGallery";

export const YX1Earphones = async ({ data }: { data: IGallery[] }) => {
  const filteredImgs = filterGallery(data, "yx1");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-6">
      <div className="flex flex-col md:flex-row md:gap-[4.75rem]">
        <Card margin="mt-[30px]" width="w-[340px]" height="w-[280px]">
          <Image
            src={filteredImgs.no_bg_img}
            alt={filteredImgs.name}
            width={320}
            height={320}
            className="rounded-lg"
          />
        </Card>
        <Card
          bgcolor="bg-light-gray"
          margin="mt-[24px]"
          width="w-[340px]"
          height="h-[280px]"
        >
          <div className=" flex flex-col w-full h-full justify-center items-start pl-[25px]">
            <Title
              label={`${filteredImgs.name + " earphones"}`}
              textColor="text-black"
            />
            <SeeProductBtn
              bgcolor="bg-none"
              textColor="text-black"
              margin="mt-[32px]"
              border="border-black"
            >
              <Link href="/">see product</Link>
            </SeeProductBtn>
          </div>
        </Card>
      </div>
    </div>
  );
};
