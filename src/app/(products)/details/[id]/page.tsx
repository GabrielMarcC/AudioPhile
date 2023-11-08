export const revalidate = 0;

import { ProductDetails } from "@/components/Details/ProductDetails";
import { Menu } from "@/components/Menu/Menu";
import { filterProducts } from "@/utils/filterProducts";

export default async function Details({ params }: { params: { id: number } }) {
  const { filterProductsByIds } = filterProducts();
  const product = await filterProductsByIds([params.id]);

  return (
    <section>
      <Menu bg="bg-black" />
      {product && product.length > 0 && <ProductDetails product={product[0]} />}
    </section>
  );
}
