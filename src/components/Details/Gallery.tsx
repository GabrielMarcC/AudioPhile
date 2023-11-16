import { Title } from "../Home/ui/Title";
import Image from "next/image";

type Props = {
  product: Products;
};

type GalleryData = {
  quantity: number;
  item: string;
};

export const Gallery = ({ product }: Props) => {
  const convert = JSON.stringify(product.includes);
  const galleryData: GalleryData[] = JSON.parse(convert);

  return (
    <div className="w-full pt-[88px] px-6 flex flex-col justify-center md:px-[40px]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <Title label="in the box" textColor="text-black" />
        </div>
        <div className="md:w-[50%] ">
          {galleryData.map((data, key) => {
            return (
              <div key={key} className="flex  gap-6 pt-6 ">
                <span className="text-dark-orange text-[15px] font-bold leading-6">
                  {data.quantity}x
                </span>
                <h3 className="text-black font-medium leading-6 opacity-50 text-[15px]">
                  {data.item}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-[45px] flex flex-col md:flex-row md:pt-[120px] md:justify-center">
        <div className="flex flex-col md:w-[40%]">
          <div>
            <Image
              width={327}
              height={180}
              src={product.img_1}
              alt={product.name}
              className="rounded-md"
            />
          </div>
          <div className="py-5">
            <Image
              width={327}
              height={180}
              src={product.img_2}
              alt={product.name}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="md:w-[50%]">
          <Image
            width={327}
            height={180}
            src={product.img_3}
            alt={product.name}
            className="rounded-md md:w-[400px] md:h-[430px] md:ml-2"
          />
        </div>
      </div>
    </div>
  );
};
