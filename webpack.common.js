module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"], // for html file in dist
      },
      // {
      //   test: /\.(svg|png|gif|jpg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[hash].[ext]",
      //       outputPath: "imgs",
      //     },
      //   },
      // },
    ],
  },
};
