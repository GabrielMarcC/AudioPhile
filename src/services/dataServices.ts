import { supabase } from "@/supabase";

export const dataServices = () => {
  const getGallery = async (): Promise<Gallery[]> => {
    const { data } = await supabase.from("gallery").select("*");
    const gallery = data as Gallery[];

    return gallery;
  };

  const getProducts = async (): Promise<Products[]> => {
    const { data } = await supabase.from("products").select("*");
    const products = data as Products[];
    return products;
  };

  return { getGallery, getProducts };
};
