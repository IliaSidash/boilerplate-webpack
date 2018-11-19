module.exports = () => {
  return {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /\.css$/,
            name: "commons",
            chunks: "initial",
            minChunks: 2
          }
        }
      }
    }
  };
};
