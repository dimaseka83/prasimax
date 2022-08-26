/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import VueRouter from 'vue-router';
import HomeGuest from './page/HomeGuest.vue';

const routes = [
  {
    path: '/',
    component: HomeGuest,
    name: 'HomeGuest',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
