const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"), // the bundle output path
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg)$/, // to import images and fonts
      //   loader: "url-loader",
      //   options: { limit: false },
      //   exclude: /node_modules/,
      //   options: {
      //     name: "[name].[ext]?[hash]",
      //   },
      // },

      {
        test: /\.(png|jpg|jpeg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images", // folder name
            },
          },
        ],
      },

      {
        test: /\.(mp4)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "videos", // folder name
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "icons", // folder name
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "documents", // folder name
            },
          },
        ],
      },
    ],
  },
};
