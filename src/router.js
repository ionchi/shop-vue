import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Shop from './components/shop/Shop'
import Checkout from './components/shop/Checkout'
import PageNotFound from './components/shared/PageNotFound'
import TermsConditions from './components/TermsConditons'
import Shipping from './components/Shipping'
import PersonalData from './components/PersonalData'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
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
      path: '/personal-data',
      name: 'personalData',
      component: PersonalData
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
