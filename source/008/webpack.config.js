const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  "entry": {
    "app": "./src/script/index.js",
    // "print": "./src/script/print.js",
  },
  "output": {
    // "filename": "bundle.js",
    "filename": "[name].bundle.js",
    "path": path.resolve(__dirname, "./dist/script")
  },
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
      {
        "test": /\.(png|jpg|svg|gif)$/,
        "use": [
          "file-loader"
        ]
      }
    ]
  },
  "plugins": [
    new htmlWebpackPlugin({
      "title": "output manager"
    }),
    new cleanWebpackPlugin(["dist"]),
    new uglifyjsWebpackPlugin()
  ]
};
