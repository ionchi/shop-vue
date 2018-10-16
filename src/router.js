import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Shop from './components/shop/Shop'
import Checkout from './components/shop/Checkout'
import PageNotFound from './components/shared/PageNotFound'
import TermsConditions from './components/TermsConditions'
import Shipping from './components/Shipping'

Vue.use(Router);

let locale = getLocale();

function getLocale() {
  let locale = window.location.pathname.replace(/^\/([^\/]+).*/i,'$1');
  if (locale !== 'ro' && locale !== 'ru')
    return 'ro';
  else
    return locale;
}

export default new Router({
  mode: 'history',
  base: (locale.trim().length && locale !== "/") ? '/' + locale : undefined,
  routes: [
    // Don't go more than one level in depth [ok /shop; NOT ok /shop/checkout - OR change changeLocaleUrl function]
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsConditions
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: Shipping
    },
    {
      path: '*',
      name: 'error',
      component: PageNotFound
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})
