import { db } from "@/services/firebase";
import { IGallery } from "@/types";
import { collection, getDocs } from "firebase/firestore";

export async function getGallery() {
  const collectionDb = await getDocs(collection(db, "gallery"));

  const querySnapshot = collectionDb;
  const galleryList: IGallery[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as IGallery;
    galleryList.push(data);
  });
  return galleryList;
}
