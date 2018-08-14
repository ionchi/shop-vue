<template>
  <div class="cart">

    <ShoppingCartSummary />
    <ShoppingCartItem
      v-for="item in items"
      :item="item"
      :key="item.id" />
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters } from 'vuex'

export default {
  name: 'ShoppingCart',
  computed: mapGetters({
    items: 'cartProducts'
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  }
}
</script>
