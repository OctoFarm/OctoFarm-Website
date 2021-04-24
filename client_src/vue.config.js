module.exports = {
  transpileDependencies: ["vuetify"],
  runtimeCompiler: true,

  pwa: {
    name: "OctoFarm",
  },

  outputDir: "./dist",
  assetsDir: "src/assets",

  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },

  },
};
