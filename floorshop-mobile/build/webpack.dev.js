
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'material-ui', 'react-router-dom', 'react-tap-event-plugin'],
    app: ['react-hot-loader/patch', './src/main.js']
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, include: [resolve('src')], loader: 'eslint-loader', enforce: 'pre',
        options: { formatter: require('eslint-friendly-formatter') }
      },
      { test: /\.(js|jsx)$/, include: [resolve('src')], loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    new DashboardPlugin()
  ]
}
