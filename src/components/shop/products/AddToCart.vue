<template>
  <v-btn color="info" class="drycoBtn" :disabled="!product.inventory"
         v-scroll-to="{el: '#shop-container', offset: -65 }" @click="addToCart(product)">
    {{$t('homePage.ourProductsSection.addToCartBtn')}}
  </v-btn>
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
      ])
    },
    methods: {
      ...mapActions(['addToCart']),
      addToCartHandler(product) {
        this.addToCart(product);

      }
    }
  }
</script>

<style scoped>
  .drycoBtn {
    background-color: #30BCD5 !important;
  }
</style>
