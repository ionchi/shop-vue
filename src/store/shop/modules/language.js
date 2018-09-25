import {app} from '../../../main'

const state = {
  lang: 'ro',
};

const mutations = {
  SET_LANG (state, payload) {
    app.$i18n.locale = payload;
    state.lang = payload;
  }
};

export default {
  state,
  mutations
}
