const path = require('path');

const webpackConfig = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'eval-cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'primoExploreClickableLogoToAnyLink',
    libraryTarget: 'umd',
    libraryExport: 'default',
    // see: https://github.com/webpack/webpack/issues/6522
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
};

module.exports = webpackConfig;