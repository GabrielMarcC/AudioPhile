export const revalidate = 0;
import { CategorysLinks } from "@/components/CategorysLinks/CategorysLinks";
import { Header } from "../components/Header/Header";
import { Details } from "@/components/Home/Details";

export default async function Home() {
  return (
    <div>
      <Header />
      <section className="pb-[120px] md:pt-[120px] flex flex-col md:flex-row md:gap-3 justify-center items-center  lg:gap-[30px]">
        <CategorysLinks />
      </section>
      <Details />
    </div>
  );
}
