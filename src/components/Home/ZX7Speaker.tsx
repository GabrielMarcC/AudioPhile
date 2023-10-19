import Image from "next/image";
import Link from "next/link";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import { Title } from "./ui/Title";
import { Card } from "./ui/Card";

type Props = {
  product: Products;
  gallery: Gallery;
};

export const ZX7Speaker = async ({ product, gallery }: Props) => {
  return (
    <Card height="h-[320px]" position="relative" margin="mt-[47px]">
      <div className="w-[320px] h-[320px] custom:hidden">
        <Image
          src={gallery.img_3}
          alt={product.name}
          width={320}
          height={320}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-[680px] md:h-[320px] lg:hidden mobile:hidden">
        <Image
          src={gallery.img_tablet}
          alt={product.name}
          width={680}
          height={320}
          className="rounded-lg"
        />
      </div>
      <div className="desktop:w-[1110px] desktop:h-[320px] tablet:hidden mobile:hidden">
        <Image
          src={gallery.img_desktop}
          alt={product.name}
          width={1110}
          height={600}
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
