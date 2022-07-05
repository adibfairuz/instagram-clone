const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

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
  plugins: [
    new ModuleFederationPlugin({
      name: 'lib',
      filename: 'remoteEntry.js',
      exposes: {
          './services': './services',
          './utils': './utils',
      }
  }),
  ],
};

