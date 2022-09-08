import dotenv from "dotenv";
import * as path from "path";
import * as webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";
import TerserPlugin from "terser-webpack-plugin";

declare const process: {
  env: {
    NODE_ENV: "production" | "development" | "none";
  };
};

dotenv.config();

const config: webpack.Configuration = {
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  mode: process.env.NODE_ENV,
  entry: {
    // Add more components here
    FirstWebComponent: "./components/first-web-component",
  },
  output: {
    // automatic output
    filename: "[name].bundle.js",
    path: `${__dirname}/dist`,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.[tj]s?$/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "styles"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".ts", ".css"],
  }
};

export default config;
