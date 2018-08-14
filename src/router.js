import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Shop from './components/shop/Shop'
import Checkout from './components/shop/Checkout'

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
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})
