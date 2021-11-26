const path = require('path');

const electronRenderPath = path.resolve(__dirname, '../electron/app/renderer');

module.exports = {
  webpack: {
    alias: {},
    configure: (webpackConfig, { env, paths }) => {

      paths.appBuild = electronRenderPath;
      webpackConfig.output = {
        ...webpackConfig.output,
        path: electronRenderPath,
        publicPath: './',
      };

      if (env === 'production') {
        // webpack 会对 electron 做特殊处理
        webpackConfig.target = 'electron-renderer';
      }
      return webpackConfig;
    },
  },
};
