<template>
  <div class="cart">

    <ShoppingCartSummary />
    <ShoppingCartItemCheckout
      v-for="item in items"
      :item="item"
      :key="item.id" />
  </div>
</template>

<script>
  import ShoppingCartItemCheckout from './ShoppingCartItemCheckout'
  import ShoppingCartSummary from './ShoppingCartSummary'
  import { mapGetters } from 'vuex'

  export default {
    name: 'ShoppingCartCheckout',
    computed: mapGetters({
      items: 'cartProducts'
    }),
    components: {
      ShoppingCartItemCheckout,
      ShoppingCartSummary
    }
  }
</script>
