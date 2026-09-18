import { Inter, Newsreader } from "next/font/google";

export const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});
