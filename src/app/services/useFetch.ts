import data from "@/app/public/data.json";

export const useFetch = () => {
  const imageDesktop = data.map((items) => {
    return items.new;
  });

  console.log(imageDesktop);

  return { imageDesktop };
};
