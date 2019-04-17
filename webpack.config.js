const webpack= require('webpack');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
const path= require('path');

module.exports= {
  entry: ['babel-polyfill', './src/index.jsx'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                 minimize: true,
                 sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /.(jpg|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        Domain: JSON.stringify("http://localhost:3000")
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([{
      from: 'assets',
      to: 'assets'
    },])
  ],
  devtool: "source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    port: 8080
  }
}