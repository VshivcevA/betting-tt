const path = require('path')
// const webpack = require("webpack")

const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // context: baseWebpackConfig.externals.paths.dist,
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8081,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      }
    },
    // static: {directory: path.join(__dirname)}
    // static: `${PA}`
  },
  // plugins: [
  //   new webpack.SourceMapDevToolPlugin({
  //     filename: '[file].map'
  //   })
  // ]
})

module.exports = new Promise((resolve,reject) => {
  resolve(devWebpackConfig)
})
