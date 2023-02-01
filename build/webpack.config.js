const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../docs'),
  assets: 'assets/',
}

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    // publicPath: "/", //dev
    publicPath: "./", //prod
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          }, {
            loader: "postcss-loader",
            options: {
              'postcssOptions': {
                config: `${PATHS.src}/js/postcss.config.js`
              },
              },
          }, {
            loader: "sass-loader",
          }
        ],
      }, {
        test: /\.css$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          }, {
            loader: "postcss-loader",
            options: {sourceMap: true,
              'postcssOptions': {
                config: `${PATHS.src}/js/postcss.config.js`
              },
            },
          },
        ],
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
    filename: `${PATHS.assets}css/[name].css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from:`${PATHS.src}/img`,
          to:`${PATHS.assets}img`
        },
        {
          from:`${PATHS.src}/static`,
          to:''
        },
      ]
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: "./index.html"
    }),
  ],
}
