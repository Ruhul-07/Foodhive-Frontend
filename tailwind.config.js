/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#091903",
        background: "#fafef9",
        primary: "#45e620",
        secondary: "#76f085",
        accent: "#5aec7c",
      },
    },
  },
  plugins: [require("daisyui")],
};
