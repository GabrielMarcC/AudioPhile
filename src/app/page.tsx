export const revalidate = 0;
import { CategoriesLinks } from "@/components/CategoriesLinks/CategoriesLinks";
import { Header } from "../components/Header/Header";
import { Details } from "@/components/Home/Details";
import { filterProducts } from "@/utils/filterProducts";

export default async function Home() {
  const { filterProductsByIds } = filterProducts();
  const product = await filterProductsByIds([2]);

  return (
    <div>
      {product && product.length > 0 && <Header product={product} />}
      <section className="pb-[120px] md:pt-[120px] flex flex-col md:flex-row md:gap-3 justify-center items-center  lg:gap-[30px]">
        <CategoriesLinks />
      </section>
      <Details />
    </div>
  );
}
