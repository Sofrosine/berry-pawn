import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5459D8",
        "primary-light": "#5D5FEF",
        "primary-lighter": "#A5A6F6",

        black: "#000000",
        "black-2": "#08162C",
        "black-3": "#212121",

        white: "#fff",
        "white-2": "#F7FAFC",

        grey: "#4F525A",
        "grey-2": "#917B7D",
        "grey-3": "#F9FAFB",
      },
      fontSize: {
        "heading-1": [
          "4.571rem",
          {
            lineHeight: "5.42rem",
          },
        ],
        "heading-2": [
          "2.85rem",
          {
            lineHeight: "3.42rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
