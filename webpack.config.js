const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.scss|\.css)/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
          test: /(\.woff|\.ttf|\.svg|\.eot|\.gif)/,
          use: 'url-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  devServer: {
    open: true
  },
  plugins: [
    new extractTextPlugin('styles.css')
  ]
};
