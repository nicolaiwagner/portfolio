/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1800px",
    },
    extend: {
      backgroundImage: {
        "blurry-gradient-haikei":
          "url('/public/img/blurry-gradient-haikei.svg')",
      },
      colors: {
        "neon-purple": "#6528F7",
        "egg-white": "#EFF4FE",
        "navy-blue": "#252B48",
        "text-purple": "#865DFF",
        "text-orange": "#FEBE8C",
      },
    },
    fontFamily: {
      fatface: ["Abril Fatface", "cursive"],
      merri: ["Merriweather", "serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
