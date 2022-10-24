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
import TechnicalAdmin from './page/Admin/Technical.vue';
import ServiceAdmin from './page/Admin/Service.vue';

// Middleware
import auth from './middleware/auth';
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
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/about',
    component: AboutAdmin,
    name: 'AboutAdmin',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/information',
    component: InformationTitleAdmin,
    name: 'InformationTitle',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/products',
    component: ProductsAdmin,
    name: 'ProductsAdmin',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/technical',
    component: TechnicalAdmin,
    name: 'TechnicalAdmin',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/service',
    component: ServiceAdmin,
    name: 'ServiceAdmin',
    meta: {
      middleware: auth,
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'hash',
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent middleware exists,
  // the default next() callback is returned.
  if (!subsequentMiddleware) return context.next;
  return (...parameters) => {
    // Otherwise, call the subsequent middleware with a new
    // next() callback.
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({...context, next: nextMiddleware});
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({...context, next: nextMiddleware});
  }
  return next();
});

export default router;
