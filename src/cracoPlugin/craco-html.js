const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getPlugin, pluginByName, whenProd } = require("@craco/craco");

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const { isFound, match } = getPlugin(
      webpackConfig,
      pluginByName("HtmlWebpackPlugin")
    );

    if (isFound) {
      const oldPlugin = match;
      const { options: oldOptions } = oldPlugin;
      const {
        publicPath = "",
        filename = "index.html",
        inject = "head",
        scriptLoading = "defer",
      } = pluginOptions;

      let newOptions = {
        ...oldOptions,
        publicPath,
        inject: "body",
        scriptLoading: "blocking",
      };

      whenProd(() => {
        newOptions.meta = {
          ...newOptions.meta,
          timestamp: `${Date.now()}`,
        };
        newOptions = {
          ...newOptions,
          filename,
          inject,
          scriptLoading
        };
      });

      // 替换 HtmlWebpackPlugin 实例
      webpackConfig.plugins = webpackConfig.plugins.map((plugin) => {
        if (plugin.constructor.name === "HtmlWebpackPlugin") {
          return new HtmlWebpackPlugin(newOptions);
        }
        return plugin;
      });
    }

    return webpackConfig;
  },
};
