/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.hbs", "./dist/**/*.html"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [require("tailwindcss-opentype"), require("tailwind-children")],
};
