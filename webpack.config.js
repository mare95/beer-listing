const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      { test: /\.svg$/, loader: 'svg-inline-loader' }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Dev server",
      template: "index.html",
    }),
  ],
};
