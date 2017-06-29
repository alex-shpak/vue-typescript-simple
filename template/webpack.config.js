const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [
      { test: /\.ts$/,          loader: 'awesome-typescript-loader'},
      { test: /\.html$/,        loader: 'html-loader'},
      { test: /\.(ttf|eot)$/,   loader: 'file-loader' },
      { test: /\.css$/,         loader: 'style-loader!css-loader' },
      { test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      file: 'index.html',
      favicon: './src/assets/logo.png',
      template: './src/index.html',
      inject: true,
      minify: false,
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
