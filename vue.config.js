const { defineConfig } = require("@vue/cli-service");

const ElementPlus = require("unplugin-element-plus/webpack");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  outputDir: "./docs/",
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      ElementPlus({
        importStyle: "sass",
        useSource: true,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "pp+ 在一起吧";
      return args;
    });
  },
});
