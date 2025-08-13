
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ec6e2f",
          secondary: "#55ba48",
          
        },
        accent: {
          orange: "#f99f78",
          green: "#9fe595",
          gray: "#dfefdf",
          brown: "#8e7859"
        },
      },
    },
  },
  plugins: [],
};

export default config;
