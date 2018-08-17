import api from './../../api/fixtures'

export const getProducts = ({ commit }) => {
  api.getProducts(products => {
    commit('RECEIVE_PRODUCTS', products);
  });
};

export const getPromotions = ({ commit }) => {
  api.getPromotions(promotions => {
    commit('RECEIVE_PROMOTIONS', promotions);
  });
};

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit('ADD_TO_CART', product.id);
  }
};

export const removeOneFromCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit('REMOVE_ONE_FROM_CART', product.id);
  }
};

export const removeFromCart = ({ commit }, product) => {
  commit('REMOVE_FROM_CART', product);
};

export const toggleCoupon = ({ commit }, coupon) => {
  commit('TOGGLE_COUPON', coupon);
};
