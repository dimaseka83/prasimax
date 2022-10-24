const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
});
module.exports = {
  publicPath: '/home/',
  outputDir: 'home',
  assetsDir: 'sub',
  indexPath: 'index.html',
  filenameHashing: true,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Prasimax',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  configureWebpack: {
    output: {
      filename: '[name].[hash].bundle.js',
    }
  },
}
