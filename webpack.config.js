const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");

const pug = require("./webpack/pug");
const styles = require("./webpack/styles");
const optimization = require("./webpack/optimization");

const common = merge([
  {
    entry: { index: "./src/js/index.js", inner: "./src/js/inner.js" },
    output: {
      filename: "js/[name].js"
    }
  },
  pug(),
  optimization()
]);

console.log(common);

const devConfig = {
  devServer: { overlay: true, stats: "errors-only" }
};

module.exports = (env, options) => {
  const mode = options.mode;

  if (mode === "production") {
    return merge([common, styles(mode)]);
  }
  if (mode === "development") {
    return merge([common, devConfig, styles(mode)]);
  }
};
