module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/tail.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      width: {
        36: "11rem",
      },
      height: {
        2: "85vh",
        60: "50vh",
      },
    },
  },
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
};
