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
        "hero-tablet":
          "url(https://res.cloudinary.com/dduiscoif/image/upload/v1695869004/home/tablet/image-header_xnrydf.jpg)",
        "hero-mobile":
          "url(https://res.cloudinary.com/dduiscoif/image/upload/v1695563159/home/mobile/image-header_vv9pyk.jpg)",
        "product-zx7":
          "url(https://res.cloudinary.com/dduiscoif/image/upload/v1695665752/home/mobile/image-speaker-zx7_pinobi_b26a1d_beebdc.jpg)",
        "bg-zx9": "url(/assets/featured-section-bg.png)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        custom: {
          min: "768px",
          max: "5000px",
        },
        mobile: {
          min: "0",
          max: "767px",
        },
        tablet: {
          max: "1023px",
          min: "768px",
        },
        desktop: {
          min: "1024px",
          max: "1980px",
        },
        desktopxl: {
          min: "1450px",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
