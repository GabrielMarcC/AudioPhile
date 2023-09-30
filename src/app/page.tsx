import { Header } from "../components/Header/header";
import { getImages } from "@/firebase/getImages";
import { Categorys } from "@/components/Home/Categorys";
import { Details } from "@/components/Home/Details";
import { getGallery } from "@/firebase/getGallery";

export default async function Home() {
  const db = await getImages();
  const data = await getGallery();
  return (
    <main>
      <Header />
      <section className="mb-[120px] flex flex-col md:flex-row md:justify-center md:gap-2">
        {db.map((item, index) => (
          <Categorys imgUrl={item.img} category={item.category} key={index} />
        ))}
      </section>
      <Details data={data} />
    </main>
  );
}
