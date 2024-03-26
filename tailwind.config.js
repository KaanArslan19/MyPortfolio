const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "lightGray-color": "var(--lightGray-color)",
        "brown-color": "var(--brown-color)",
        "gray-color": "var(--gray-color)",
        "white-color": "var(--white-color)",
      },
    },
  },
  plugins: [],
});
