import { supabase } from "@/supabase";

export const filterGallery = () => {
  const filterGalleryByIds = async (Ids: number[]): Promise<Gallery[]> => {
    const { data: gallery } = await supabase
      .from("gallery")
      .select("*")
      .in("id_product", Ids);

    const filteredGallery = gallery as Gallery[];
    return filteredGallery;
  };

  const filterGalleryByCategories = async (
    category: string
  ): Promise<Gallery[]> => {
    const { data: gallery } = await supabase
      .from("gallery")
      .select("*")
      .eq("category", category);

    const filteredGallery = gallery as Gallery[];
    return filteredGallery;
  };
  return { filterGalleryByIds, filterGalleryByCategories };
};
