import { IGallery } from "@/types";

export const filterGallery = (data: IGallery[], name: string) => {
  if (!data && !name) {
    throw new Error("Failed to filter gallery");
  }

  let objGallery = { ...(data as {}) } as IGallery;

  const gallery = data.find((item) => {
    return item.name === name;
  });

  if (gallery) objGallery = { ...gallery };

  return objGallery;
};
