export const revalidate = 0;
import { Products } from "@/components/Categories/Products";
import { CategoriesLinks } from "@/components/CategoriesLinks/CategoriesLinks";
import { Menu } from "@/components/Menu/Menu";
import { filterGallery } from "@/utils/filterGallery";
import { filterProducts } from "@/utils/filterProducts";

export default async function Categories({
  params,
}: {
  params: { category: string };
}) {
  const { filterProductsByCategories } = filterProducts();
  const { filterGalleryByCategories } = filterGallery();
  const product = await filterProductsByCategories(params.category);
  const gallery = await filterGalleryByCategories(params.category);

  return (
    <section>
      <Menu bg="bg-black" category={`${params.category}`} />
      <Products data={product} dataImg={gallery} />
      <div className="flex flex-col md:flex-row md:gap-3 justify-center items-center pt-[120px] lg:gap-[30px]">
        <CategoriesLinks />
      </div>
    </section>
  );
}
