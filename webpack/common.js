const path = require('path');

const cwd = process.cwd();

const common = (root = cwd) => ({
  mode: 'development',
  output: {
    publicPath: '/static/',
    filename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      '~': path.resolve(root, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|eof|otf|svg|png|jpg|jpeg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
      },
    ],
  },
});


module.exports = common