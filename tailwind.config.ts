import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#D87D4A",
        "light-orange": "#FBAF85",
        "black-custom": "#101010",
        "full-black": "#000",
        "medium-gray": "#4C4C4C",
        "light-gray": "#F1F1F1",
        "very-light-gray": "#FAFAFA",
        "white-custom": "#FFF",
      },
      backgroundImage: {
        "hero-desktop":
          "url(https://res.cloudinary.com/dduiscoif/image/upload/v1695563078/home/desktop/image-hero_b17lli.jpg)",
        "hero-mobile":
          "url(https://res.cloudinary.com/dduiscoif/image/upload/v1695563159/home/mobile/image-header_vv9pyk.jpg)",
        "product-zx7":
          "url(https://res.cloudinary.com/dduiscoif/image/upload/v1695665752/home/mobile/image-speaker-zx7_pinobi_b26a1d_beebdc.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;
