/** @type {import('tailwindcss').Config} */

export default {
  content: { files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"] },
  theme: {
    extend: {
      backgroundImage: {
        "clear-btn":
          "radial-gradient(58.83% 58.83% at 50% 50%, rgba(244, 55, 70, 0.50) 0%, rgba(177, 0, 14, 0.50) 100%)",
      },
    },
  },
  plugins: [],
};
