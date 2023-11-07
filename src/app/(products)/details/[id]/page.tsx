export const revalidate = 0;

import { ProductDetails } from "@/components/Details/ProductDetails";
import { filterGallery } from "@/utils/filterGallery";
import { filterProducts } from "@/utils/filterProducts";

export default async function Details({ params }: { params: { id: number } }) {
  const { filterProductsByIds } = filterProducts();
  const { filterGalleryByIds } = filterGallery();
  const product = await filterProductsByIds([params.id]);
  const gallery = await filterGalleryByIds([params.id]);

  return (
    <section>
      {product && product.length > 0 && (
        <ProductDetails data={product[0]} galleryData={gallery[0]} />
      )}
    </section>
  );
}
