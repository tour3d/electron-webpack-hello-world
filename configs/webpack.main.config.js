const path = require('path');

module.exports = {
  target: 'electron-main',
  entry: './src/main/index.js',
  output: {
    path: path.resolve(__dirname, '../dist/main'),
    filename: 'index.js',
  },
  node: {
    __dirname: false,
  },
  mode: 'production',
  devtool: false,
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log('isProduction = ', isProduction);
  return {
    target: 'electron-main',
    entry: './src/main/index.js',
    output: {
      path: path.resolve(__dirname, '../dist/main'),
      filename: 'index.js',
    },
    node: {
      __dirname: false,
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval-source-map',
  };
};
