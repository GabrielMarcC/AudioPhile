import firebase_app from "@/services/config";
import { IGallery } from "@/types";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getGallery() {
  const app = firebase_app;
  const db = getFirestore(app);
  const collectionDb = await getDocs(collection(db, "gallery"));

  const querySnapshot = collectionDb;
  const galleryList: IGallery[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as IGallery;
    galleryList.push(data);
  });
  return galleryList;
}
