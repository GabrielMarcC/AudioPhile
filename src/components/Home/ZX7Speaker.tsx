import Image from "next/image";
import Link from "next/link";
import { SeeProductBtn } from "./ui/SeeProductBtn";
import { Title } from "./ui/Title";

export const ZX7Speaker = async () => {
  return (
    <div className="w-[327px] h-[320px] mt-[47px] relative">
      <Image
        src="https://res.cloudinary.com/dduiscoif/image/upload/v1695665560/home/mobile/image-speaker-zx7_pinobi.jpg"
        alt="ss"
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
    </div>
  );
};
