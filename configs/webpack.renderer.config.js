const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log('isProduction = ', argv.mode);
  return {
    target: 'electron-renderer',
    entry: './src/renderer/index.js',
    output: {
      path: path.resolve(__dirname, '../dist/renderer'),
      filename: '[name]-[hash].js',
    },
    devServer: {
      static: './src',
      hot: true,
      port: 9000,
    },
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    watchOptions: {
      ignored: ['**/node_modules'],
    },
    module: {
      rules: [
        // {
        //   test: /\.html$/,
        //   loader: HtmlWebpackPlugin.loader,
        // },
        {
          test: /\.(scss|css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name]-[hash].css',
      }),
      new CopyPlugin({
        patterns: [{ from: './src/assets', to: 'assets' }],
      }),
    ],
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval-source-map',
  };
};
