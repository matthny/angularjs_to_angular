const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './app/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  optimization: {
    minimize: false
  },

  mode: 'development',

  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },


  resolve: {
    extensions: ['.tsx', '.ts'],
  },

  
  
};


module.exports = config;