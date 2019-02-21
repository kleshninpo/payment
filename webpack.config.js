const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "dist/"
  },
  devServer: {
    overlay: true,
    contentBase: [path.resolve(__dirname, "dist")],
    compress: true,
    port: 4200,
    historyApiFallback: true,
    noInfo: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'OpenSans-Bold.ttf',
          outputPath: 'fonts/',
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      title: 'payment page',
      template: './src/index.html',
    }),
  ],
};

module.exports = () => {
  conf.devtool = !devMode
    ? false
    : 'eval-sourcemap';

  return conf;
};
