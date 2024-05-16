/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{vue, html}", "./components/**/*.{vue, html}"],
  theme: {
    extend: {
      height: {
        "450px": "450px",
      },
    },
  },
  plugins: [],
};
