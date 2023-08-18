const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const mergeJSON = require("handlebars-webpack-plugin/utils/mergeJSON");

// Project config data.
// Go here to change stuff for the whole demo, ie, change the navbar.
// Also go here for the various data loops, ie, category products, slideshows
const projectData = mergeJSON(path.join(__dirname, "/src/data/**/*.json"));
// paths used in various placed in webpack config
const paths = {
  src: {
    imgs: "./src/assets/images",
    scss: "./src/assets/scss",
    fonts: "./src/assets/fonts",
    js: "./src/assets/js",
    favicon: "./src/assets/favicon",
    svgs: "./src/assets/svgs",
  },
  dist: {
    imgs: "./assets/images",
    css: "./assets/css",
    fonts: "./assets/fonts",
    js: "./assets/js",
    favicon: "./assets/favicon",
    svgs: "./assets/svgs",
  },
};

const rules = [
  {
    test: /\.(sass|scss|css)$/,
    include: path.resolve(__dirname, paths.src.scss.slice(2)),
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          url: false,
          // sourceMap: true,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            path: path.join(__dirname, "/postcss.config.js"),
          },
        },
      },
      {
        loader: "sass-loader",
        // options: {
        //     sourceMap: true,
        //     sassOptions: {
        //         indentWidth: 4,
        //         outputStyle: 'expanded',
        //         sourceComments: true
        //     }
        // }
      },
    ],
  },
];

const optimization = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/](node_modules)[\\/].+\.js$/,
        name: "vendor",
        chunks: "all",
      },
    },
  },
  minimizer: [
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          "default", // Uses CSSO's default preset
          {
            discardComments: { removeAll: true }, // Remove all comments
          },
        ],
      },
    }),
    // new TerserPlugin({
    //   extractComments: false,
    //   terserOptions: {
    //     output: {
    //       comments: false,
    //     },
    //   },
    // }),
  ],
};

const plugins = [
  new webpack.ProgressPlugin(),
  new CopyPlugin({
    patterns: [
      {
        from: paths.src.fonts,
        to: paths.dist.fonts,
        noErrorOnMissing: true,
      },
      {
        from: paths.src.imgs,
        to: paths.dist.imgs,
        noErrorOnMissing: true,
      },
      {
        from: paths.src.favicon,
        to: paths.dist.favicon,
        noErrorOnMissing: true,
      },
    ],
  }),
  new HandlebarsPlugin({
    entry: path.join(process.cwd(), "src", "html", "**", "*.html"),
    output: path.join(process.cwd(), "dist", "[path]", "[name].html"),
    partials: [
      path.join(process.cwd(), "src", "partials", "**", "*.{html,svg}"),
    ],
    data: projectData,
    helpers: {
      webRoot: function () {
        return "{{webRoot}}";
      },
      config: function (data) {
        return data;
      },
      ifEquals: function (arg1, arg2, options) {
        if (arg1 === arg2) {
          return options.fn(this);
        }
        return options.inverse(this);
      },
      log: function (data) {
        console.log(data);
      },
      limit: function (arr, limit) {
        if (!Array.isArray(arr)) {
          return [];
        }
        return arr.slice(0, limit);
      },
    },
    onBeforeSave: function (Handlebars, res, file) {
      const elem = file.split("//").pop().split("/").length;
      return res.split("{{webRoot}}").join(".".repeat(elem));
    },
  }),
  new MiniCssExtractPlugin({
    filename: paths.dist.css + "/[name].css",
  }),
];

const webPackConfig = {
  entry: {
    libs: [paths.src.scss + "/libs.scss"],
    theme: [paths.src.js + "/theme.js", paths.src.scss + "/theme.scss"],
  },
  output: {
    filename: paths.dist.js + "/[name].js",
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: rules,
  },
  optimization: optimization,
  plugins: plugins,
};

module.exports = webPackConfig;
