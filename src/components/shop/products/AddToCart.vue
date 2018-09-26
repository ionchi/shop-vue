<template>
  <v-btn color="info" class="drycoBtn" :disabled="!product.inventory" @click="addToCart(product)">{{$t('homePage.ourProductsSection.addToCartBtn')}}</v-btn>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'AddToCart',
    props: {
      product: Object
    },
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped>
  .drycoBtn {
    background-color: #30BCD5 !important;
  }
</style>
