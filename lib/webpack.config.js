const {ModuleFederationPlugin} = require("webpack").container;
const { DefinePlugin } = require("webpack");
const path = require("path");
require('dotenv').config({ path: '../.env' });

module.exports = {
  entry: "./index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 5001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        }
      }
    ],
  },
  performance: {
    maxAssetSize: 5000000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'lib',
      filename: 'remoteEntry.js',
      exposes: {
          './services': './services',
          './utils': './utils',
      }
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
};

