import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto';
import accounting from 'accounting'
import pluralize from 'pluralize'
import router from './router'
import App from './App'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.config.productionTip = false;

Vue.filter('formatMoney', function(val){
  return accounting.formatMoney(val, { symbol: "lei",  format: "%v %s" }, 2, ".", ",");
});
Vue.filter('pluralize', pluralize);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
