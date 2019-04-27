#!/usr/bin/env node
const child = require('child_process');
const path = require('path');
const fs = require('fs');

const argv = require('yargs').argv;

const root = process.cwd();
console.log('Project root: ' + root);
const skeletons = path.dirname(require.resolve('../skeletons'));

console.log('Setting up project');

const paths = [
  path.resolve(root, 'src'),
  path.resolve(root, 'src', 'entry'),
  path.resolve(root, 'src', 'pages'),
  path.resolve(root, 'src', 'lib'),
  path.resolve(root, 'src', 'components'),
  path.resolve(root, 'src', 'components', 'app'),
  path.resolve(root, 'src', 'components', 'html'),
  path.resolve(root, 'src', 'routes'),
  path.resolve(root, 'src', 'root'),
  path.resolve(root, 'src', 'server'),
  path.resolve(root, 'src', 'server', 'middleware'),
  path.resolve(root, 'src', 'server', 'middleware', 'logging'),
  path.resolve(root, 'src', 'server', 'middleware', 'ssr'),
  path.resolve(root, 'public'),
];

paths.forEach(dir => {
  console.log('Attempting to create ', dir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

const files = [
  [path.resolve(skeletons, 'package.json'), path.resolve(root, 'package.json')],
  [
    path.resolve(skeletons, 'jest.config.json'),
    path.resolve(root, 'jest.config.json'),
  ],
  [
    path.resolve(
      skeletons,
      argv['with-emotion'] ? 'babelrc-emotion' : 'babelrc'
    ),
    path.resolve(root, '.babelrc'),
  ],
  [
    path.resolve(skeletons, 'webpack-client.js'),
    path.resolve(root, 'webpack-client.config.js'),
  ],
  [
    path.resolve(skeletons, 'webpack-server.js'),
    path.resolve(root, 'webpack-server.config.js'),
  ],
  [
    path.resolve(skeletons, 'entry-client.js'),
    path.resolve(root, 'src/entry/client.js'),
  ],
  [
    path.resolve(skeletons, 'entry-server.js'),
    path.resolve(root, 'src/entry/server.js'),
  ],
  [
    path.resolve(skeletons, 'index.html'),
    path.resolve(root, 'public/index.html'),
  ],
  [
    path.resolve(skeletons, 'root-client.js'),
    path.resolve(root, 'src/root/client.js'),
  ],
  [
    path.resolve(skeletons, 'root-server.js'),
    path.resolve(root, 'src/root/server.js'),
  ],
  [
    path.resolve(skeletons, 'app.js'),
    path.resolve(root, 'src/components/app/index.js'),
  ],
  [
    path.resolve(skeletons, 'html.js'),
    path.resolve(root, 'src/components/html/index.js'),
  ],
  [
    path.resolve(skeletons, 'routes.js'),
    path.resolve(root, 'src/routes/index.js'),
  ],
  [
    path.resolve(skeletons, 'middleware-logging.js'),
    path.resolve(root, 'src/server/middleware/logging/index.js'),
  ],
  [
    path.resolve(skeletons, 'middleware-ssr.js'),
    path.resolve(root, 'src/server/middleware/ssr/index.js'),
  ],
];

files.forEach(entry => {
  const from = entry[0];
  const to = entry[1];
  console.log('Attempting to copy ' + to);
  fs.copyFileSync(from, to);
});

console.log('Installing dependencies');
child.execSync(
  'npm install -S @babel/polyfill webpack webpack-cli html-react-parser express nodemon react-helmet react-router-dom react react-dom prop-types npm-run-all cross-env'
);
if(argv['with-emotion']) {
  child.execSync('npm install -S @emotion/core')
}
child.execSync('npm install -D rimraf semistandard');
console.log('Done!');
