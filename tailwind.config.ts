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
        dark_gray: "#9D9D9D",
        white: "#FFFFFF",
        light_gray: "#C5C5C5",
        very_light_gray: "#E8E8E8",
        dark_gray_2: "#5A5A5A",
        sky_blue: "#8ACBCE",
        very_light_gray_2: "#E6E6E6",
        black: "#000000",
        light_blue: "#92CBCE",
        medium_gray: "#A1A1A1",
        medium_gray_2: "#A3A3A3",
        aqua_blue: "#B0D8DA",
        very_light_gray_3: "#C4C4C4",
      },
    },
  },
  plugins: [],
};
export default config;
