import { IGallery } from "@/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";

export const filterGallery = async (data: IGallery[], name: string) => {
  if (!data && !name) {
    throw new Error("Failed to filter gallery");
  }

  const filterByQuery = query(
    collection(db, "gallery"),
    where("name", "==", name)
  );

  let objGallery: IGallery[] = [];
  let filteredItem = {} as IGallery;

  const querySnapshot = await getDocs(filterByQuery);
  querySnapshot.forEach((doc) => {
    const data = doc.data() as IGallery;
    objGallery.push(data);
  });

  objGallery.filter((img) => (img.name === name ? (filteredItem = img) : null));

  return filteredItem;
};
