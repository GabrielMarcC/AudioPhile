// import { IGallery } from "@/types";

// export const filterGallery = (data: IGallery[], name: string) => {
//   if (!data && !name) {
//     throw new Error("Failed to filter gallery");
//   }

//   let objGallery = {} as IGallery;

//   const gallery = data
//     .filter((item) => item.name === name)
//     .map(
//       (item) =>
//         (objGallery = {
//           category: item.category,
//           name: item.name,
//           img_1: item.img_1,
//           img_2: item.img_2,
//           img_3: item.img_3,
//           img_product: item.img_product,
//           no_bg_img: item.no_bg_img,
//         })
//     );

//   return objGallery;
// };

import { IGallery } from "@/types";

export const filterGallery = (data: IGallery[], name: string) => {
  const foundItem = data.find((item) => item.name === name);

  if (!foundItem) {
    throw new Error("Gallery item not found");
  }

  const { category, img_1, img_2, img_3, img_product, no_bg_img, img_tablet } =
    foundItem;

  return {
    category,
    name,
    img_1,
    img_2,
    img_3,
    img_product,
    img_tablet,
    no_bg_img,
  };
};
