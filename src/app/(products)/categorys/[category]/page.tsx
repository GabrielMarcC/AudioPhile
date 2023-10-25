export const revalidate = 0;
import { Products } from "@/components/Categorys/Products";
import { CategorysLinks } from "@/components/CategorysLinks/CategorysLinks";
import { Menu } from "@/components/Menu/Menu";
import { filterGallery } from "@/utils/filterGallery";
import { filterProducts } from "@/utils/filterProducts";

export default async function Categorys({
  params,
}: {
  params: { category: string };
}) {
  const { filterProductsByCategorys } = filterProducts();
  const { filterGalleryByCategorys } = filterGallery();
  const product = await filterProductsByCategorys(params.category);
  const gallery = await filterGalleryByCategorys(params.category);

  return (
    <section>
      <Menu bg="bg-black" category={`${params.category}`} />
      <Products data={product} dataImg={gallery} />
      <div className="flex flex-col md:flex-row md:gap-3 justify-center items-center pt-[120px] lg:gap-[30px]">
        <CategorysLinks />
      </div>
    </section>
  );
}
