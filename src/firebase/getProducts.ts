import { Iproduct } from "./../types/index";
import firebase_app from "@/services/config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getProducts() {
  const app = firebase_app;
  const db = getFirestore(app);
  const collectionDb = await getDocs(collection(db, "products"));

  const productList: Iproduct[] = [];
  const querySnapshot = collectionDb;

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Iproduct;
    productList.push(data);
  });

  return productList;
}
