import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      utilities: {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  // IE と Edge
          'scrollbar-width': 'none',  // Firefox
          '&::-webkit-scrollbar': {
            display: 'none'  // WebKitベースのブラウザ
          }
        }
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-in-out forwards',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),require("@tailwindcss/forms")],
};
export default config;
