/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./assets/vendor/preline/preline.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("preline/plugin"),
    // require("@tailwindcss/forms")
  ],
};
