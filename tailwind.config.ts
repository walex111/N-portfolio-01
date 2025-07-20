// tailwind.config.ts

import { type Config } from "tailwindcss";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        apothem: ["ApothemCaps", "sans-serif"],
        yukari: ["Yukarimobile", "sans-serif"],
      },
    },
  },
  // required for ShadCN
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  plugins: [tailwindScrollbarHide],
};

export default config;
