const state = {
  activeCoupon: {},
  isActiveCoupon: false
};

const mutations = {
  ACTIVATE_COUPON (state, coupon) {
    state.activeCoupon = coupon;
  },

  TOGGLE (state) {
    state.isActiveCoupon = !state.isActiveCoupon;
  },

  DEACTIVATE_COUPON (state) {
    state.activeCoupon = {};
  }
};

export default {
  state,
  mutations
};
