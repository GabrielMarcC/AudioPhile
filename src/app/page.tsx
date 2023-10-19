export const revalidate = 0;
import { Categorys } from "@/components/Home/Categorys";
import { Header } from "../components/Header/Header";
import { Details } from "@/components/Home/Details";
import { filters } from "@/utils/filters";

export default async function Home() {
  const { filterGalleryByIds } = filters();
  const gallery = await filterGalleryByIds([1, 4, 6]);

  return (
    <div>
      <Header />
      <section className="mb-[120px] md:mt-[120px] flex flex-col md:flex-row md:justify-center md:gap-2 lg:gap-8">
        {gallery.map((imgs) => (
          <Categorys
            key={imgs.id}
            category={imgs.category}
            imgUrl={imgs.img_home}
          />
        ))}
      </section>
      <Details />
    </div>
  );
}
