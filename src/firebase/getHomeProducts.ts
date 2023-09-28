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

// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
