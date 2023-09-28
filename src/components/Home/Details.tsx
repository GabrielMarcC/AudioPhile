import { YX1Earphones } from "./YX1Earphones";
import { ZX7Speaker } from "./ZX7Speaker";
import { ZX9Speaker } from "./ZX9Speaker";
import { getGallery } from "@/firebase/getGallery";

export const Details = async () => {
  const data = await getGallery();

  return (
    <section className="w-full h-full flex flex-col items-center">
      <ZX9Speaker data={data} />
      <ZX7Speaker data={data} />
      <YX1Earphones data={data} />
    </section>
  );
};
