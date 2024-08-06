const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
   output: {
      filename: "[name].[contenthash:12].js",
      },
   mode: 'production',
};

module.exports = merge(commonConfig, prodConfig);