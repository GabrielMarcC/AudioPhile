import { filterProducts } from "@/utils/filterProducts";
import { YX1Earphones } from "./YX1Earphones";
import { ZX7Speaker } from "./ZX7Speaker";
import { ZX9Speaker } from "./ZX9Speaker";
import { filterGallery } from "@/utils/filterGallery";

export const Details = async () => {
  const { filterProductsByIds } = filterProducts();
  const { filterGalleryByIds } = filterGallery();
  const product = await filterProductsByIds([1, 5, 6]);
  const gallery = await filterGalleryByIds([4, 5, 6]);

  return (
    <section className="w-full h-full flex flex-col items-center">
      <ZX9Speaker product={product[2]} gallery={gallery[2]} />
      <ZX7Speaker product={product[1]} gallery={gallery[1]} />
      <YX1Earphones product={product[0]} gallery={gallery[0]} />
    </section>
  );
};
