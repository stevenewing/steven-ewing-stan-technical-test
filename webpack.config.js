const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: `${process.cwd()}/dist`,
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    port: 3000,
    publicPath: 'http://localhost:3000/'
  },
  devtool: 'inline-source-map',
  entry: {
    app: ['core-js/stable', 'regenerator-runtime/runtime', 'webpack/hot/dev-server', 'src/app.js']
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        loader: 'babel-loader',
        test: /src\/(.*)\.js$/
      },
      {
        exclude: [/node_modules/],
        loader: 'file-loader',
        options: {
          name: '[folder]/[name].[ext]',
          outputPath: 'assets'
        },
        test: /src\/(.*)\.(png|svg)$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    library: 'steven-ewing-stan-technical-test',
    libraryTarget: 'umd',
    path: path.resolve('./dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({ patterns: [{ from: './data/sample.json', to: 'feeds/sample.json' }] }),
    new HtmlPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  resolve: {
    modules: [path.resolve('.'), path.resolve('node_modules')]
  },
  target: 'web'
};
