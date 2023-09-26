import firebase_app from "@/services/config";
import { ImagesProduct } from "@/types";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getImages() {
  const app = firebase_app;
  const db = getFirestore(app);
  const collectionDb = await getDocs(collection(db, "img_home"));

  const querySnapshot = collectionDb;
  const imagesList: ImagesProduct[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as ImagesProduct;
    imagesList.push(data);
  });
  return imagesList;
}
