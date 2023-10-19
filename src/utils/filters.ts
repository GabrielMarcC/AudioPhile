import { supabase } from "@/supabase";

export const filters = () => {
  const filterGalleryByIds = async (Ids: number[]): Promise<Gallery[]> => {
    const { data: gallery } = await supabase
      .from("gallery")
      .select("*")
      .in("id", Ids);

    const filteredGallery = gallery as Gallery[];
    return filteredGallery;
  };

  const filterProductsByIds= async (
    productIds: number[]
  ): Promise<Products[]> => {
    const { data: products } = await supabase
      .from("products")
      .select("*")
      .in("id", productIds);

    const filteredProducts = products as Products[];

    return filteredProducts;
  };

  return { filterGalleryByIds, filterProductsByIds};
};
