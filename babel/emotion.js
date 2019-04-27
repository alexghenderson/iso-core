const isProduction = String(process.env.NODE_ENV) === 'production';
const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = () => {
  return {
    plugins: [
      [
        '@wordpress/babel-plugin-import-jsx-pragma',
        {
          scopeVariable: 'jsx',
          source: '@emotion/core',
          isDefault: false,
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: 'jsx',
        },
      ],
      [
        'babel-plugin-emotion',
        {
          sourceMap: !isProduction,
          autoLabel: !isProduction,
          labelFormat: '[dirname]-[filename]--[local]',
        },
      ],
    ],
  };
};
