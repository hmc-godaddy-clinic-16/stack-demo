var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src',
    vendor: ['react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: "babel-loader"
      }
    ]
  }
};
