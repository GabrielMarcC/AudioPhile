import { supabase } from "@/supabase";

export const filterProducts = () => {
  const filterProductsByIds = async (
    productIds: number[]
  ): Promise<Products[]> => {
    const { data: products } = await supabase
      .from("products")
      .select("*")
      .in("id", productIds);

    const filteredProducts = products as Products[];

    return filteredProducts;
  };

  const filterProductsByCategories = async (
    category: string
  ): Promise<Products[]> => {
    const { data: categorys } = await supabase
      .from("products")
      .select("*")
      .eq("category", category);

    const filteredCategorys = categorys as Products[];

    return filteredCategorys;
  };

  const filterProductsByName = async (name: string): Promise<Products[]> => {
    const { data: names } = await supabase
      .from("products")
      .select("*")
      .eq("name", name);

    const filteredCategorys = names as Products[];

    return filteredCategorys;
  };

  return {
    filterProductsByIds,
    filterProductsByCategories,
    filterProductsByName,
  };
};
