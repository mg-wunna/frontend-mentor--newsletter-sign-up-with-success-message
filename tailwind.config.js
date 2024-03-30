/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-tomato": "hsl(4, 100%, 67%)",
        "primary-pink": "#FF5476",
        "neutral-dark-slate-grey": "hsl(234, 29%, 20%)",
        "neutral-charcoal-grey": "hsl(235, 18%, 26%)",
        "neutral-grey": "hsl(231, 7%, 60%)",
        "neutral-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "roboto-bold": ["roboto-bold"],
        "roboto-regular": ["roboto-regular"],
      },
    },
  },
  plugins: [],
};
