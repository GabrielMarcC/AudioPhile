export const revalidate = 0;
import { Products } from "@/components/Categories/Products";
import { CategoriesLinks } from "@/components/CategoriesLinks/CategoriesLinks";
import { Menu } from "@/components/Menu/Menu";
import { filterProducts } from "@/utils/filterProducts";
import { Metadata } from "next";

type Props = {
  params: {
    categories: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Category ${params.categories}`,
    description: `enjoy the best ${params.categories}`,
  };
};

export default async function Categories({ params }: Props) {
  const { filterProductsByCategories } = filterProducts();
  const product = await filterProductsByCategories(params.categories);

  return (
    <section>
      <Menu bg="bg-black" category={`${params.categories}`} />
      <Products product={product} />
      <div className="flex flex-col md:flex-row md:gap-3 justify-center items-center pt-[120px] lg:gap-[30px]">
        <CategoriesLinks />
      </div>
    </section>
  );
}
