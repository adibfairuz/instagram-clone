const {ModuleFederationPlugin} = require("webpack").container;
const { DefinePlugin } = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require('dotenv').config({ path: '../../.env' });
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3005,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      }
    ],
  },
  performance: {
    maxAssetSize: 5000000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'directMessage',
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
  ],
};

