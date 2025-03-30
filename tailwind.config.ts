import { button } from "motion/react-client";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardbg:"#ffeef2",
        button:"#00406c",
        fcolor:"#2A4064",
        lcolor:"#208b3a",
        bc:"#23D16C",
      },
      fontFamily:{
        open:['Open Sans'],
        work:["Work Sans"],
        inter:["Inter"],
      },
      borderRadius: {
        'xlp': '0.98rem',
      },
      width: {
        'a': '30rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
