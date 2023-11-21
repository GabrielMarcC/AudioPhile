import Image from "next/image";

type Props = {
  product: Products;
};

export const Gallery = ({ product }: Props) => {
  return (
    <div className="w-[80%] lg:w-[1110px]">
      <div className="pt-[45px] flex flex-col md:flex-row md:pt-[120px] md:justify-center w-full">
        <div className="flex flex-col md:w-[40%]">
          <div>
            <Image
              width={327}
              height={180}
              src={product.img_1}
              alt={product.name}
              className="rounded-md md:h-[182px] lg:w-[555px] lg:h-[268px]"
            />
          </div>
          <div className="py-5">
            <Image
              width={327}
              height={180}
              src={product.img_2}
              alt={product.name}
              className="rounded-md md:h-[180px] lg:w-[555px] lg:h-[268px]"
            />
          </div>
        </div>
        <div className="md:w-auto w-full">
          <Image
            width={327}
            height={180}
            src={product.img_3}
            alt={product.name}
            className="rounded-md md:w-[400px] md:h-[385px] md:ml-2 lg:w-[700px] lg:h-[555px]"
          />
        </div>
      </div>
    </div>
  );
};
