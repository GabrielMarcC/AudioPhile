import { getProducts } from "@/firebase/getProducts";
import Image from "next/image";

export default async function ProductList() {
  const db = await getProducts();

  return (
    <div>
      {db.map((items, index) => {
        return (
          <div key={index}>
            <p>{items.features}</p>
          </div>
        );
      })}
    </div>
  );
}
