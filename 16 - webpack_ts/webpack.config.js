const path = require("path")
const HTMLWebpakPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },

  plugins: [
    new HTMLWebpakPlugin({
      template: "./index.html"
    })
  ],

  resolve: {
    extensions: [".ts", ".js", ".json", ".cjs"]
  },

  devServer: {
    open: true
  }
}