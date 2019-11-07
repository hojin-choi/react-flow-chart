const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, arg) => {
  const config = {
    entry: "./pages/App.tsx",
    output: {
      path: path.join(process.cwd(), "dist"),
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader"
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./pages/Template.html" })
    ],
    devServer: {
      port: 4200,
      historyApiFallback: true
    },
  };

  return config;
};
