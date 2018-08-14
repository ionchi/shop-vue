<template>
  <div class="media mb-1">
    <div class="media-left">
      <div class="media-object rounded vue-logo"></div>
    </div>
    <div class="media-body">
      <strong class="d-block">{{item.title}}</strong>
      <span>Cantitate: {{item.quantity}} - {{item.price | formatMoney}}</span>
    </div>
    <div class="media-right align-middle" v-if="this.$route.name !== 'checkout'">
      <RemoveFromCart :product="item" />
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  name: 'ShoppingCartItem',
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>

<style scoped>
  .vue-logo {
    height: 60px;
    width: 60px;
    background: url('./../../../assets/product-1.jpg') no-repeat center center #ddd;
    background-size: 115%;
  }

  .media {
    margin-top: 10px;
  }
</style>
