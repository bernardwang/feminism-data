// webpack.config.js

let path = require('path');
let webpack = require('webpack');
let HTMLPlugin = require('html-webpack-plugin');
let FaviconsPlugin = require('favicons-webpack-plugin');

// webpack.config.js
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: './assets/', // This is used to generate URLs to e.g. images
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true,
              importLoaders: 2
            }
          },
          { loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
    ]
  },
  plugins: [
    new HTMLPlugin({
      title: 'Bernard Wang',
      template: path.resolve(__dirname, 'src', 'pages', 'index.ejs')
    }),
    new FaviconsPlugin(path.resolve(__dirname,'favicon.png'))
  ]
};
