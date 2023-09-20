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
        "light-gray": "#F1F1F1",
        "very-light-gray": "#FAFAFA",
        "white-custom": "#FFF",
      },
    },
  },
  plugins: [],
};
export default config;
