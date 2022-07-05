const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { DefinePlugin } = require('webpack');
require('dotenv').config({ path: './.env' });
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3003,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["solid"],
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  performance: {
    maxAssetSize: 5000000
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'user',
        filename: 'remoteEntry.js',
        exposes: {
            './App': './src/bootstrap',
        },
        remotes: {
          lib: `lib@${process.env['LIB_URL']}`,
        },
        shared: {
          ...deps,
        }
    }),
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ]
};