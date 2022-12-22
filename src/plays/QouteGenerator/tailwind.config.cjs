/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      background: {
        bgbody: "#4285f4",
      },
      width: {
        85: "21rem",
      },
    },
  },
  plugins: [],
};
