import { Outfit, Work_Sans } from "next/font/google";

export const outfit = Outfit({
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const workSans = Work_Sans({
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-worksans",
});
