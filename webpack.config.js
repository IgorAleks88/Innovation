const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  watch: false,
  entry: {
    main: path.resolve(__dirname, './src/js/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/html/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/html/game.html'),
      filename: 'game.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/html'),
          to: path.resolve(__dirname, './dist'),
        },
        {
          from: path.resolve(__dirname, './assets'),
          to: path.resolve(__dirname, './dist'),
        },
      ],
    }),
  ],
  module: {
    rules:
        [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './img',
              outputPath: './img',
            },
          },
        ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
};
