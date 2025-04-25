// craco.config.js
const path = require("path");
const { CracoHtmlPlugin } = require("./cracoPlugin/craco-html");

module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"), // 允许通过@符号来表示 src目录
    },
  },
  plugins: [
    {
      plugin: CracoHtmlPlugin,
      options: {
        inject: "body",
        scriptLoading: "blocking",
      },
    },
  ],
};
