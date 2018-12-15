import Vue from 'vue'
import VueGtm from 'vue-gtm'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto';
import FlagIcon from 'vue-flag-icon'
import VueProgressiveImage from 'vue-progressive-image'
import accounting from 'accounting'
import pluralize from 'pluralize'
import router from './router'
import App from './App'
import store from './store'
import i18n from './lang/lang'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.use(FlagIcon);
Vue.use(VueProgressiveImage);
Vue.config.productionTip = false;

Vue.use(VueGtm, {
  id: 'GTM-KBS4SH2', // Your GTM ID
  vueRouter: router,
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
});

Vue.filter('formatMoney', function(val){
  return accounting.formatMoney(val, { symbol: "lei",  format: "%v %s" }, 2, ".", ",");
});
Vue.filter('formatMoneyRu', function(val){
  return accounting.formatMoney(val, { symbol: "лей",  format: "%v %s" }, 2, ".", ",");
});
Vue.filter('dbLangFix', function(val){
  if (val === 'Prune Fara Sambure')
    return 'Prune Fără Sâmbure';
  return val;
});
Vue.filter('pluralize', pluralize);

Vue.filter('saleChristmas', function(val){
  return val / 0.8;
});

router.beforeEach((to, from, next) => {
  let lang = to.params.lang;
  if (lang===undefined)
    lang = i18n.locale;
  to.params.lang = lang;
  if (lang === 'ru')
    document.title = to.meta.titleRu;
  else
    document.title = to.meta.title;
  next();
});


export const app = new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App)
});
