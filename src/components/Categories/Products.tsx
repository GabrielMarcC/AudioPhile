import Image from "next/image";
import { Title } from "../Home/ui/Title";
import { SeeProductBtn } from "../Home/ui/SeeProductBtn";
import Link from "next/link";

type Props = {
  data: Products[];
  dataImg: Gallery[];
};

export const Products = ({ data, dataImg }: Props) => {
  const changeOrder = [...data].sort(function (a, b) {
    return a.id - b.id;
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {changeOrder.map((products, index) => {
        const verifiedCategory = products.category === "speakers";
        const changeOrder = verifiedCategory
          ? dataImg.slice().reverse()
          : dataImg;

        return (
          <div
            key={products.id}
            className={`mb-10 mt-[64px] flex flex-col justify-center items-center ${
              index == 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } lg:gap-[125px]`}
          >
            <div className="flex justify-center items-center md:w-[690px] md:h-[350px] lg:w-[540px] lg:h-[560px] rounded-lg bg-light-gray">
              <Image
                src={changeOrder[index].img_product}
                alt={products.name}
                width={300}
                height={300}
                className="rounded-lg lg:w-[350px] lg:h-[380px]"
              />
            </div>
            <div className="w-[90%] md:w-[50%] flex flex-col justify-center items-center lg:items-start lg:w-[445px] lg:h-[400px] pt-8">
              <h3 className="uppercase text-dark-orange md:tracking-[10px]">
                {products.new ? "new product" : ""}
              </h3>
              <Title
                label={`${products.name}`}
                textColor="text-black"
                padding="py-[24px]"
                size="md:text-[40px]"
                leading="md:leading-[44px]"
              />
              <p className="py-6 text-[15px] font-medium leading-6 text-black opacity-50 lg:text-left text-center">
                {products.description}
              </p>
              <SeeProductBtn
                bgcolor="bg-dark-orange"
                hover="hover:lg:bg-light-orange"
              >
                <Link href={`/details/${products.id}`}>see product</Link>
              </SeeProductBtn>
            </div>
          </div>
        );
      })}
    </div>
  );
};
