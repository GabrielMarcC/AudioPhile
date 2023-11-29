import { Title } from "../Home/ui/Title";

type Props = {
  product: Products;
};

type GalleryData = {
  quantity: number;
  item: string;
};

export const Items = ({ product }: Props) => {
  const convert = JSON.stringify(product.includes);
  const galleryData: GalleryData[] = JSON.parse(convert);

  return (
    <>
      <div className="w-full lg:w-[100%] pt-[88px]  flex flex-col justify-center items-center md:items-start">
        <div className="flex flex-col md:flex-row w-full justify-center lg:flex-col">
          <div className="md:w-[100%] lg:w-[100%]">
            <Title label="in the box" textColor="text-black" />
          </div>
          <div className="md:w-[100%]">
            {galleryData.map((data, key) => {
              return (
                <div key={key} className="flex gap-6 pt-6">
                  <span className="text-dark-orange text-[15px] font-bold leading-6">
                    {data.quantity}x
                  </span>
                  <span className="text-black font-medium leading-6 opacity-50 text-[15px]">
                    {data.item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
