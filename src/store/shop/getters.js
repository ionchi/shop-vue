export const cartProducts = state => {
  return state.shoppingCart.added.map(({ id, quantity }) => {
    const product =
      state
        .products.all
        .find(product => product.id === id);

    return {
      ...product,
      quantity
    };
  });
};

export const itemsQuantity = state => {
  return cartProducts(state).reduce((quantity, item) => {
    return quantity + item.quantity;
  }, 0);
};

export const subtotal = state => {
  const sum = cartProducts(state).reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity;
  }, 0);

  return sum;
};

export const taxes = state => subtotal(state) * 0.00;

export const shipping = state => {
  const shippings = cartProducts(state).map(item => item.shipping);
  const sum = cartProducts(state).reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity;
  }, 0);

  if (sum >= 150 || !shippings.length) {
    return 0;
  } else {
    return Math.max(...shippings);
  }
};

export const isActiveCoupon = state => {
  return state.coupons.isActiveCoupon;
};

export const activeCoupon = state => {
  return state.coupons.activeCoupon;
};

export const total = state => {
  if (state.coupons.isActiveCoupon) {
    return (subtotal(state) + shipping(state))*(1-state.coupons.activeCoupon.discount);
  }

  return (subtotal(state) + shipping(state));
};
