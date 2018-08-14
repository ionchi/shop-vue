<template>
  <ul class="list-group my-2" >
    <li class="list-group-item">
      Subtotal: {{(total - shipping) | formatMoney}}
    </li>

    <li class="list-group-item">
      Livrare:
      <span v-if="!freeShip"> {{shipping | formatMoney}}</span>
      <em v-if="freeShip"> Gratuit</em>
    </li>

    <li class="list-group-item">
      <strong>Total:</strong>
      <strong v-if="!totalDiscount"> {{total | formatMoney}}</strong>
      <span v-if="totalDiscount">
        <strong> {{totalWithDiscount | formatMoney}}</strong>
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ShoppingCartSummary',
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'taxes',
      'shipping',
      'total'
    ]),
    ...mapState({
      productDiscount: state => state.shoppingCart.productDiscount,
      freeShipping: state => state.shoppingCart.freeShipping,
      totalDiscount: state => state.shoppingCart.totalDiscount
    }),
    totalWithDiscount () {
      let total = this.$store.getters.total;
      return total > 0 ? this.total : 0;
    },
    freeShip () {
      return this.$store.getters.subtotal>120;
    }
  }
}
</script>
