import { supabase } from "@/supabase";

export const filterGallery = () => {
  const filterGalleryByIds = async (Ids: number[]): Promise<Gallery[]> => {
    const { data: gallery } = await supabase
      .from("gallery")
      .select("*")
      .in("id", Ids);

    const filteredGallery = gallery as Gallery[];
    return filteredGallery;
  };

  const filterGalleryByCategorys = async (
    category: string
  ): Promise<Gallery[]> => {
    const { data: gallery } = await supabase
      .from("gallery")
      .select("*")
      .eq("category", category);

    const filteredGallery = gallery as Gallery[];
    return filteredGallery;
  };
  return { filterGalleryByIds, filterGalleryByCategorys };
};
