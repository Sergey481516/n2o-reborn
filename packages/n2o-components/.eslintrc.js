module.exports = {
  "extends": [
  "plugin:@typescript-eslint/recommended",
  "react-app",
  "prettier"
],
  "plugins": [
  "@typescript-eslint",
  "react"
],
  "rules": {
  "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "no-unused-vars": [0, {"vars": "all", "args": "none"}]
}
}
