/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import VueRouter from 'vue-router';
import HomeGuest from './page/Guest/Home.vue';
import AboutGuest from './page/Guest/About.vue';
import Odm from './page/Guest/Odm.vue';

const routes = [
  {
    path: '/',
    component: HomeGuest,
    name: 'HomeGuest',
  },
  {
    path: '/about',
    component: AboutGuest,
    name: 'AboutGuest'
  },
  {
    path: '/odm',
    component: Odm,
    name: 'OdmGuest'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
