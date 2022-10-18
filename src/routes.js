/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import VueRouter from 'vue-router';
import HomeGuest from './page/Guest/Home.vue';
import AboutGuest from './page/Guest/About.vue';
import Mou from './page/Guest/Partnership.vue';
import Odm from './page/Guest/Odm.vue';
import Produk from './page/Guest/Produk.vue';
import Jasa from './page/Guest/Jasa.vue';
import Contact from './page/Guest/Contact.vue';
import ResetPassword from './page/Guest/ResetPassword.vue';

// Admin
import HomeAdmin from './page/Admin/Home.vue';
import AboutAdmin from './page/Admin/About.vue';
import InformationTitleAdmin from './page/Admin/Information.vue';
import ProductsAdmin from './page/Admin/Products.vue';


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
  },
  {
    path: '/product',
    component: Produk,
    name: 'ProdukGuest'
  },
  {
    path: '/service',
    component: Jasa,
    name: 'JasaGuest'
  },
  {
    path: '/partnership',
    component: Mou,
    name: 'MouGuest'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'ContactGuest'
  },
  {
    path: '/resetPassword/:token',
    component: ResetPassword,
    name: 'ResetPassword',
  },

  // Admin
  {
    path: '/admin',
    component: HomeAdmin,
    name: 'HomeAdmin',
  },
  {
    path: '/admin/about',
    component: AboutAdmin,
    name: 'AboutAdmin'
  },
  {
    path: '/admin/information',
    component: InformationTitleAdmin,
    name: 'InformationTitle'
  },
  {
    path: '/admin/products',
    component: ProductsAdmin,
    name: 'ProductsAdmin'
  }
];

const router = new VueRouter({
  routes,
  mode: 'hash',
});

export default router;
