/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueSweetalert2);
import 'sweetalert2/dist/sweetalert2.min.css';

new Vue({
  vuetify,
  router,
  template: '<router-view/>',
  render: (h) => h(App),
}).$mount('#app');
