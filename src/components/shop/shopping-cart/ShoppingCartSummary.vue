<template>
  <div>

    <v-layout align-space-between justify-center row fill-height text-xs-center cart-summary>
      <v-flex xs10 sm3 class="price-section">
        <div class="headline">Subtotal:</div>
        <div class="font-weight-light">
          {{(total - shipping) | formatMoney}}
        </div>
      </v-flex>
      <v-flex xs10 sm3 class="price-section">
        <div class="headline">Livrare:</div>
        <div class="font-weight-light">
          <span v-if="!freeShip"> {{shipping | formatMoney}}</span>
          <em v-if="freeShip"> Gratuit</em>
        </div>
      </v-flex>
      <v-flex xs10 sm3 class="price-section">
        <div class="headline"><strong>Total:</strong></div>
        <div class="font-weight-light">
          <strong v-if="!totalDiscount"> {{total | formatMoney}}</strong>
          <span v-if="totalDiscount">
          <strong> {{totalWithDiscount | formatMoney}}</strong>
        </span>
        </div>
      </v-flex>
    </v-layout>
  </div>
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

<style scoped>
  .cart-summary {
    font-size: 20px;
    margin: 20px auto 30px auto;
  }

  .price-section {
    border: solid 3px #DFDFDF;
  }
</style>
