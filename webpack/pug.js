const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        chunks: ["index", "commons"],
        template: "./src/index.pug"
      }),
      new HtmlWebpackPlugin({
        filename: "inner.html",
        chunks: ["inner", "commons"],
        template: "./src/inner.pug"
      })
    ],
    module: {
      rules: [{ test: /.pug$/, use: "pug-loader" }]
    }
  };
};
