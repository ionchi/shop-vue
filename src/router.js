import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Shop from './components/shop/Shop'
import ThankYouPage from './components/shop/ThankYouPage'
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
      meta: {title: 'dryco.md | Prune Uscate', titleRu: 'dryco.md | чернослив'},
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      meta: {title: 'dryco.md | Magazin', titleRu: 'dryco.md | магазин'},
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      meta: {title: 'dryco.md | Comanda', titleRu: 'dryco.md | команда'},
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsConditions,
      meta: {title: 'dryco.md | Termeni si conditii', titleRu: 'dryco.md | Правила и условия'},
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: Shipping,
      meta: {title: 'dryco.md | Livrare', titleRu: 'dryco.md | доставкa'},
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouPage,
      meta: {title: 'dryco.md | Multumim', titleRu: 'dryco.md | спасибо'},
    },
    {
      path: '*',
      name: 'error',
      component: PageNotFound,
      meta: {title: 'dryco.md | 404'},
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})
