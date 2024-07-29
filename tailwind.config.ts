import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nft-soft-blue": "hsl(215, 51%, 70%)",
        "nft-cyan": "hsl(178, 100%, 50%)",
        "nft-very-dark-blue-main": "hsl(217, 54%, 11%)",
        "nft-very-dark-blue-card": "hsl(216, 50%, 16%)",
        "nft-very-dark-blue-line": "hsl(215, 32%, 27%)",
        "nft-white": "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
      fontFamily: {
        outfit: ["Outifit", "sans-serif"],
      },
      fontWeight: {
        normal: "300",
        semibold: "400",
        bold: "600"
      }
    },
  },
  plugins: [],
};
export default config;
