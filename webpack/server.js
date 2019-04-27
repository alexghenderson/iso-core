const path = require('path');
const webpack = require('webpack');
const common = require('./common');

const cwd = process.cwd();

module.exports = (entry = 'src/entry/server.js', root = cwd) => ({
  ...common(root),
  entry: path.resolve(root, entry),
  output: {
    path: path.resolve(root, 'dist'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
});
