/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": " 0 0 5px rgba(0, 0, 0, 0.20)",
      },
    },
    plugins: [],
  },
};
