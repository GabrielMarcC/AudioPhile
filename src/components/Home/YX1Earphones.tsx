import Image from "next/image";
import { Card } from "./ui/Card";
import { Title } from "./ui/Title";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import Link from "next/link";

export const YX1Earphones = async () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-6">
      <Card>
        <Image
          src="https://res.cloudinary.com/dduiscoif/image/upload/v1695564091/products/product-yx1-earphones/image-gallery-2_oeseoo.jpg"
          alt=""
          width={320}
          height={200}
          className="rounded-lg"
        />
      </Card>
      <Card bgcolor="bg-light-gray" margin="mt-[24px]">
        <div className=" flex flex-col w-full h-full justify-center items-start pl-[25px]">
          <Title label="yx1 earphones" textColor="text-black" />
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
