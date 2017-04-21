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
        exclude: /vendor\/(\S*)\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /vendor\/(\S*)\.js$/,
        loader: 'script-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=src/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'root.jQuery': 'jquery',
      d3: 'd3',
    }),
    new HTMLPlugin({
      title: 'Bernard Wang',
      template: path.resolve(__dirname, 'src', 'pages', 'index.ejs')
    }),
    new FaviconsPlugin(path.resolve(__dirname,'favicon.png'))
  ],
  resolve: {
    alias: {
      'Velocity': path.join(__dirname, 'node_modules/velocity-animate/velocity.js'),
      'node_modules': path.join(__dirname, 'node_modules'),
      'bower_modules': path.join(__dirname, 'bower_modules'),
    }
  }
};
