import { Iproduct } from "../types/index";
import firebase_app from "@/services/config";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export async function getHomeProducts() {
  const app = firebase_app;
  const db = getFirestore(app);
  const collectionDb = query(
    collection(db, "products"),
    where("id", "==", "1")
  );

  const productList: Iproduct[] = [];
  const querySnapshot = await getDocs(collectionDb);

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Iproduct;
    productList.push(data);
  });

  return productList;
}
