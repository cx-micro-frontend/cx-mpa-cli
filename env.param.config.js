'use strict';
const path = require('path');

module.exports = {
  dev: {
    mode: 'MPA', //project mode
    assetsPublicPath: '/',
    port: 8070,
    useEslint: false,
  },
  prod: {
    mode: 'MPA', //project mode
    assetsPublicPath: '../',
    // cssExtractPublicPath: '../',
    /** Source Maps */
    // prodCssSourceMap: false,
    // prodJsSourceMap: true,
    productionGzip: false,
    useEslint: false,
  },
  base: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
    },
    prettier: {
      switch: true,
      files: [
        'mock/**/*.js',
        '.postcssrc.js',
        'env.config.js',
        'env.param.config.js',
        '.eslintrc.js',
      ],
    },
  },
  tools: {
    npmUpgradeList: [
      {
        module: 'cx-builder',
        edition: 'latest',//beta / latest
        version: null,
      },
    ],
  },
};
