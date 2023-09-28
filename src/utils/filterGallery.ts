import { IGallery } from "@/types";

export const filterGallery = (data: IGallery[], name: string) => {
  if (!data && !name) {
    throw new Error("Failed to filter gallery");
  }

  let objGallery = {} as IGallery;

  const gallery = data
    .filter((item) => item.name === name)
    .map(
      (item) =>
        (objGallery = {
          category: item.category,
          name: item.name,
          img_1: item.img_1,
          img_2: item.img_2,
          img_3: item.img_3,
          img_product: item.img_product,
          no_bg_img: item.no_bg_img,
          img_tablet: item.img_tablet,
        })
    );

  return objGallery;
};
