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
import Activate from './page/Guest/Activate.vue';
import Berita from './page/Guest/berita';
import DetailBerita from './page/Guest/berita/_id.vue';
import Lowongan from './page/Guest/Lowongan.vue';

// Admin
import HomeAdmin from './page/Admin/Home.vue';
import AboutAdmin from './page/Admin/About.vue';
import InformationTitleAdmin from './page/Admin/Information.vue';
import ProductsAdmin from './page/Admin/Products.vue';
import TechnicalAdmin from './page/Admin/Technical.vue';
import ServiceAdmin from './page/Admin/Service.vue';
import PartnersAdmin from './page/Admin/Partnership.vue';
import ContactsAdmin from './page/Admin/Contact.vue';
import JasaAdmin from './page/Admin/Jasa.vue';
import Pesanan from './page/Admin/Pesanan.vue';
import BeritaAdmin from './page/Admin/Berita.vue';

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
  {
    path: '/user/activate/:token',
    component: Activate,
    name: 'Activate',
  },
  {
    path: '/news',
    component: Berita,
    name: 'Berita',
  },
  {
    path: '/news/:id',
    component: DetailBerita,
    name: 'DetailBerita',
  },
  {
    path: '/lowongan',
    component: Lowongan,
    name: 'Lowongan',
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
  },
  {
    path: '/admin/partnership',
    component: PartnersAdmin,
    name: 'PartnersAdmin',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/contact',
    component: ContactsAdmin,
    name: 'ContactsAdmin',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/jasa',
    component: JasaAdmin,
    name: 'JasaAdmin',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/pesanan',
    component: Pesanan,
    name: 'PesananAdmin',
    meta: {
      middleware: auth,
    }
  },
  {
    path: '/admin/berita',
    component: BeritaAdmin,
    name: 'BeritaAdmin',
    meta: {
      middleware: auth,
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
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
