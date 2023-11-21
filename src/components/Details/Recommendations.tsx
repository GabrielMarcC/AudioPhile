import { filterProducts } from "@/utils/filterProducts";
import { randomIds } from "@/utils/randomIds";
import Image from "next/image";
import { SeeProductBtn } from "../Home/ui/SeeProductBtn";
import Link from "next/link";
import { Title } from "../Home/ui/Title";

type Props = {
  id: number;
};

export const Recommendations = async ({ id }: Props) => {
  const { filterProductsByIds } = filterProducts();
  const ids = randomIds(id);
  const recommendations = await filterProductsByIds(ids);

  return (
    <div className="flex flex-col items-center justify-center lg:pb-[175px]">
      <Title
        label="you may also like"
        textColor="text-black"
        size="text-[24px] md:text-[32px]"
        padding="pb-[40px] pt-[40px]"
      />
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row">
        {recommendations.map((products) => {
          return (
            <div
              key={products.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[327px] h-[120px] md:w-[223px] md:h-[318px] lg:w-[350px] lg:h-[318px] bg-light-gray flex items-center justify-center rounded-md">
                <Image
                  width={100}
                  height={120}
                  alt={products.name}
                  src={products.img_product}
                />
              </div>
              <Title
                label={`${products.name}`}
                textColor="text-black"
                size="text-[24px]"
                padding="py-[32px]"
              />
              <SeeProductBtn bgcolor="bg-dark-orange">
                <Link href={`/details/${products.id}`}>see product</Link>
              </SeeProductBtn>
            </div>
          );
        })}
      </div>
    </div>
  );
};
