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
      safelist: ["class1", "class2"], // Add any classes that you want to exclude from purging
    }),
  ],
};

module.exports = postcssConfig;
