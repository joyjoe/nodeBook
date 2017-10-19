const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
// const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  "entry": {
    // "app": "./src/script/dynamic.js",
    "index": "./src/script/index.js",
    // "vendor": ["lodash"]
  },
  "output": {
    // "filename": "./script/[id]-[name]-[chunkhash:5].bundle.js",
    "filename": "./script/[name].bundle.js",
    "path": path.resolve(__dirname, "./dist"),
    // "chunkFilename": "[id]-[name].bundle.js"
    // "chunkFilename": "[name].bundle.js"
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
      // "title": "output manager"
      "title": "caching"
    }),
    new cleanWebpackPlugin(["dist"]),
    // new uglifyjsWebpackPlugin()
    // 内置插件提供公共部分
    // new webpack.optimize.CommonsChunkPlugin({
    //   "name": "vendor"
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   "name": "runtime"
    // }),
    // // new webpack.HashedModuleIdsPlugin(),
    // new webpack.ProvidePlugin({
    //   "lodash": "lodash"
    // })
  ],
  // "devtool": "inline-source-map",
  // "devServer": {
  //   "contentBase": ["./dist"],
  //   "hot": true
  // },
  // "externals": {
  //   "lodash": "_"
  // }
};
