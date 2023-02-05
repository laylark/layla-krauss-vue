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
          shadow: "#040C16",
        },
        purple: {
          light: "#546696",
          dark: "#45537A",
        },
        orange: "#FF7200",
        white: {
          DEFAULT: "#FFFFFF",
          bg: "#F2F4FA",
        },
        gray: { form: "#E5E5E5" },
        green: "#09732B",
      },
    },
  },
  plugins: [],
};
