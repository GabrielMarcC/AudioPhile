import { db } from "@/services/firebase";
import { ImagesProduct } from "@/types";
import { collection, getDocs } from "firebase/firestore";

export async function getImages() {
  const collectionDb = await getDocs(collection(db, "img_home"));

  const querySnapshot = collectionDb;
  const imagesList: ImagesProduct[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as ImagesProduct;
    imagesList.push(data);
  });

  return imagesList;
}
