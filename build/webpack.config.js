const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
    publicPath: "auto",
    clean: true,
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
          filename: `${PATHS.assets}img/[name][ext]`
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
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
    filename: `${PATHS.assets}css/[name].css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
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
