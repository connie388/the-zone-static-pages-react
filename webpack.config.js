const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 4000;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      // https://requestmetrics.com/web-performance/fast-inline-images-react-webpack
      // Webpack 5 has a new feature called Asset Modules which is meant to
      // replace the url-loader, file-loader, and raw-loader’s used in Webpack 4 for this situation.
      {
        test: /\.(png|jpg|svg|jpeg|pdf|mp4)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // Inline images under 10KB
          },
        },
        generator: {
          filename: "assets/[name]-[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
