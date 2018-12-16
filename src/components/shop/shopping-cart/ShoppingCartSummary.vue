<template>
  <div>

    <v-layout align-space-between justify-center row fill-height text-xs-center cart-summary>
      <v-flex xs11 sm4 class="price-section">
        <div class="headline">{{$t('shop.summary.subtotal')}}:</div>
        <div class="font-weight-light" v-if="this.$i18n.locale==='ro'">
          {{subtotal | formatMoney}}
        </div>
        <div class="font-weight-light" v-else>
          {{subtotal | formatMoneyRu}}
        </div>
      </v-flex>
      <v-flex xs11 sm4 class="price-section">
        <div class="headline">{{$t('shop.summary.shipping')}}:</div>
        <div class="font-weight-light">
          <span v-if="this.$i18n.locale==='ro'"><span v-if="!freeShip"> {{shipping | formatMoney}}</span></span>
          <span v-else><span v-if="!freeShip"> {{shipping | formatMoneyRu}}</span></span>
          <em v-if="freeShip"> {{$t('shop.summary.free')}}</em>
        </div>
      </v-flex>
      <v-flex xs11 sm4 class="price-section">
        <div class="headline"><strong>{{$t('shop.summary.total')}}:</strong></div>
        <div class="font-weight-light">
          <span v-if="this.$i18n.locale==='ro'">
            <strong v-if="!totalDiscount"> {{total | formatMoney}}</strong>
          </span>
          <span v-else>
            <strong v-if="!totalDiscount"> {{total | formatMoneyRu}}</strong>
          </span>
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
        return this.$store.getters.subtotal>=150;
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
