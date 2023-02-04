module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/rice-bowl.jpg')",
      },
      opacity: {
        80: ".8",
        95: ".95",
        50: ".5",
      },
      colors: {
        black: {
          light: "#454545",
        },
        purple: {
          light: "#546696",
          dark: "#45537a",
        },
        orange: "#FF7200",
      },
    },
  },
  plugins: [],
};
