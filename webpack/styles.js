const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = mode => {
  const devMode = mode !== "production";
  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: devMode ? "./css/[name].css" : "./css/[name].[hash].css",
        chunkFilename: devMode ? "./css/[id].css" : "./css/[id].[hash].css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    }
  };
};
