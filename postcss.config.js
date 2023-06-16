const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const postcssScss = require("postcss-scss");
const postcssMixins = require("postcss-mixins");
const postcssSimpleVars = require("postcss-simple-vars");
const cssNano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");

const safelist = [
  /html/,
  /body/,
  /^-tw-/,
  /^tw-/,
  /^maxSm:/,
  /^maxXl:/,
  /^maxLg:/,
  /^smToMd:/,
  /^sm:/,
  /^md:/,
  /^lg:/,
  /^xl:/,
  /^2xl:/,
  /^3xl:/,
  /^child:/,
  /^hover:/,
  /^focus:/,
  /^group/,
  /^group-hover:tw-/,
  /^last:/,
  /^first:/,
  /^even:/,
  /^before:/,
  /^after:/,
  /^nextIcon^/,
  /^modal-/,
  /^swiper/,
  /^react-tabs/,
];

const postcssConfig = {
  syntax: postcssScss,
  plugins: [
    postcssImport(),
    postcssUrl(),
    autoprefixer(),
    // postcssMixins(),
    // postcssSimpleVars(),
    postcssPresetEnv(),
    tailwindcss(),
    cssNano(),
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.js"], // Specify the files to analyze for unused CSS
      safelist: {
        standard: safelist,
        deep: safelist,
        greedy: safelist,
      }, // Add any classes that you want to exclude from purging
    }),
  ],
};

module.exports = postcssConfig;
