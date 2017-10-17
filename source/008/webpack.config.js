const path = require("path");

module.exports = {
  "entry": "./src/script/index.js",
  "output": {
    "filename": "bundle.js",
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
  }
};