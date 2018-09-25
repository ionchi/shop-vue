import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ro from './ro.json'
import ru from './ru.json'

Vue.use(VueI18n);

const defaultLocale = 'ro';
var locale = window.location.pathname.replace(/^\/([^\/]+).*/i,'$1');

const messages = {
  ro,
  ru,
};

const i18n = new VueI18n({
  locale: (locale.trim().length && locale != "/") ? locale : defaultLocale,
  fallbackLocale: 'ro',
  messages
});

export default i18n
