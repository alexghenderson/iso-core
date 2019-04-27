const isProduction = String(process.env.NODE_ENV) === 'production';
const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = (_, opts = {}) => {
  if (!opts.env) opts.env = {};
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {...opts.env, modules: isTest ? 'commonjs' : false},
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      isTest ? 'babel-plugin-dynamic-import-node' : null,
    ].filter(Boolean),
  };
};
