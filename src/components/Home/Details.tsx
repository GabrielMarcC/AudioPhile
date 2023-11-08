import { filterProducts } from "@/utils/filterProducts";
import { YX1Earphones } from "./YX1Earphones";
import { ZX7Speaker } from "./ZX7Speaker";
import { ZX9Speaker } from "./ZX9Speaker";

export const Details = async () => {
  const { filterProductsByIds } = filterProducts();
  const product = await filterProductsByIds([1, 5, 6]);

  return (
    <section className="w-full h-full flex flex-col items-center">
      <ZX9Speaker product={product[2]} />
      <ZX7Speaker product={product[0]} />
      <YX1Earphones product={product[1]} />
    </section>
  );
};
