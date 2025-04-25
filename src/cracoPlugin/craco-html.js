const { getPlugin, pluginByName, whenProd } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const { isFound, match } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'));
    if (isFound) {
      const { userOptions } = match;
      const { publicPath = '', filename = 'index.html' } = pluginOptions;

      userOptions.publicPath = publicPath;
      userOptions.inject = 'body';
      userOptions.scriptLoading = 'blocking';

      whenProd(() => {
        userOptions.meta = {
          ...userOptions.meta,
          timestamp: `${Date.now()}`,
        };
        userOptions.filename = filename;
      });
    }

    return webpackConfig;
  },
};
