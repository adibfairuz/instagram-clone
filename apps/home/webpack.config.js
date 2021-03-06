const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;
const { DefinePlugin } = require('webpack');
require('dotenv').config({ path: '../../.env' });
const path = require('path');
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      // {
      //   test: /\.(png|svg|jpe?g|gif)$/,
      //   include: /images/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'images/',
      //         publicPath: 'images/'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  performance: {
    maxAssetSize: 5000000
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'home',
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
    new VueLoaderPlugin(),
    require('unplugin-vue-components/webpack')({
      dirs: ['src/components', 'src/containers'],
      allowOverrides: true,
      directoryAsNamespace: true
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ]
};