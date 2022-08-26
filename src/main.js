/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  template: '<router-view/>',
  render: (h) => h(App),
}).$mount('#app');
