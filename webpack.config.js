const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './build/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  optimization: {
    minimize: false
  },

  mode: 'development',

  resolve: {
    extensions: ['.tsx', '.ts'],
  }
  
};


module.exports = config;