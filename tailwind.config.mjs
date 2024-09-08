/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          500: "#050831",
          800: "#01021C",
        },
        // Light Sky Blue
        sky: {
          100: "#F7FCFE",
          200: "#F0F9FE",
          500: "#D5E6F6",
        },
        gray: {
          50: "#F9FAFB",
          400: "#98A2B3",
          500: "#697586",
        },
        "gray-blue": {
          200: "#D5D9EB",
        },
        orange: {
          500: "#FA7C3F",
        },
      },
    },
  },
  plugins: [],
};
