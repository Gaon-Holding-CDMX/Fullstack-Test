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
        background: "#272d4d",
        'background-accent': "#1f2238",
        primary: '#4d55ec'
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
