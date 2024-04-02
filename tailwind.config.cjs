/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["DM-Serif-Text", "sans-serif"],
      },
      colors: {
        "anc-primary": "#881929",
        "anc-primary-light": "#B24A59",
        "anc-secondary": "#0C2339",
        "anc-secondary-light": "#5E747F",
        "anc-accent": "#204CA5",
        "anc-accent-light": "#8CA8E1",
        "anc-text": "#48474D",
        "anc-text-light": "#79787E",
        "anc-background-light": "#F2F1ED",
        "anc-background-dark": "#141622",
      },

      animation: {
        "fade-up": "fadeUp 0.3s linear",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
