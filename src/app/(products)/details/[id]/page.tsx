export const revalidate = 0;

import { CategoriesLinks } from "@/components/CategoriesLinks/CategoriesLinks";
import { ProductDetails } from "@/components/Details/ProductDetails";
import { Recommendations } from "@/components/Details/Recommendations";
import { Menu } from "@/components/Menu/Menu";
import { filterProducts } from "@/utils/filterProducts";

export default async function Details({ params }: { params: { id: number } }) {
  const { filterProductsByIds } = filterProducts();
  const product = await filterProductsByIds([params.id]);

  return (
    <section>
      <Menu bg="bg-black" />
      {product && product.length > 0 && <ProductDetails product={product[0]} />}
      <div className="flex flex-col md:flex-row md:gap-3 justify-center items-center pt-[120px] lg:gap-[30px]">
        <Recommendations id={params.id} />
      </div>
      <div className="flex flex-col md:flex-row md:gap-3 justify-center items-center pt-[120px] lg:gap-[30px]">
        <CategoriesLinks />
      </div>
    </section>
  );
}
