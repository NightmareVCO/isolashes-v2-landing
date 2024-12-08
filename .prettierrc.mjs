/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: "auto",
};
