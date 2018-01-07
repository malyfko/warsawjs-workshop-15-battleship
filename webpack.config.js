var path = require('path'),
  precss = require('precss'),
  autoprefixer = require('autoprefixer'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  webpack = require('webpack');

module.exports = {
  entry: [
    './src/scripts/main.js'
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2016", "env"]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file?name=[path][name].[ext]"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "assets/styles")]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.jpg', '.jpeg', '.png', '.gif']
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
