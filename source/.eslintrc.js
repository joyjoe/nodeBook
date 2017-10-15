// http://eslint.cn/docs/user-guide/getting-started
module.exports = {
  "root": true,
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-console": "off",
    "no-unused-vars": "off",
    "quote-props": "error",
    "quotes": "error"
  }
}