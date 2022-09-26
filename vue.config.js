const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
});
<<<<<<< HEAD
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' 
//   ? process.env.PROJECT_DIST + '/'
//   :'/'
// }
=======

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
};
>>>>>>> 5c25a588f5937086831d21f2606eecc55b7f5a02
