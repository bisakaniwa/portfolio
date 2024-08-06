const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

const devConfig = {
   mode: 'development',
   output: {
      publicPath: 'http://localhost:9000/',
   },
   devtool: 'source-map',
   devServer: {
      port: 9000,
      static: {
         directory: path.resolve(__dirname, '../dist'),
      },
      devMiddleware: {
         index: 'index.html',
         writeToDisk: true,
      },
      historyApiFallback: {
         index: 'index.html',
      },
      client: {
         overlay: true,
      },
      liveReload: false,
   },
};

module.exports = merge(commonConfig, devConfig);