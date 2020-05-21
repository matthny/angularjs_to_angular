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
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
    ],
  },


  resolve: {
    extensions: ['.tsx', '.ts'],
  },
};


module.exports = config;