/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      fontFamily: {
        "robecha": "Robecha",
        "ailerons": "Ailerons",
        "Blanka": "Blanka",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

