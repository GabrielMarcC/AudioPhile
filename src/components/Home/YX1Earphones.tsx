import Image from "next/image";
import { Card } from "./ui/Card";
import { Title } from "./ui/Title";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import Link from "next/link";

type Props = {
  product: Products;
  gallery: Gallery;
};

export const YX1Earphones = async ({ product, gallery }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-6">
      <div className="flex flex-col md:flex-row md:gap-[2.75rem] w-full justify-center items-center">
        <Card margin="mt-[30px]" width="w-[540px]" height="w-[280px]">
          <Image
            src={gallery.img_2}
            alt={product.name}
            width={320}
            height={100}
            className="rounded-lg md:h-[100%] lg:w-[540px] lg:h-[320px]"
          />
        </Card>
        <Card
          bgcolor="bg-light-gray"
          margin="mt-[24px]"
          width="w-[540px]"
          height="h-[280px]"
        >
          <div className=" flex flex-col w-full h-full justify-center items-start pl-[25px]">
            <Title label={`${product.name}`} textColor="text-black" />
            <SeeProductBtn
              bgcolor="bg-none"
              textColor="text-black"
              margin="mt-[32px]"
              border="border-black"
              hover="lg:hover:bg-black lg:hover:text-white"
            >
              <Link href="/">see product</Link>
            </SeeProductBtn>
          </div>
        </Card>
      </div>
    </div>
  );
};
