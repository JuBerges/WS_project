module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cwc: {
          red: "#E84977",
          blue: "#49AADE",
          gray: "#222222",
        },
        teal: {
          100: "#94FFFF",
          200: "#66FFFF",
          300: "#39FFFF",
          400: "#0BFFFF",
          500: "#00DCDC",
          600: "#00AEAE",
          700: "#008080",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
