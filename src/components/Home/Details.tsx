import { YX1Earphones } from "./YX1Earphones";
import { ZX7Speaker } from "./ZX7Speaker";
import { ZX9Speaker } from "./ZX9Speaker";

export const Details = async () => {
  return (
    <section className="w-full h-full flex flex-col items-center">
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </section>
  );
};
