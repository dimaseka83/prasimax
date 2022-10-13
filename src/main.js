/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuex from 'vuex';
import Store from './store/index';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(Vuex);
import 'sweetalert2/dist/sweetalert2.min.css';

const store = new Vuex.Store(Store);

new Vue({
  vuetify,
  router,
  store,
  template: '<router-view/>',
  render: (h) => h(App),
}).$mount('#app');
