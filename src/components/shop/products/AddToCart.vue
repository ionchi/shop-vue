<template>
  <v-btn color="info" :disabled="!product.inventory" @click="addToCart(product); toChk()">Adaugă în Coș!</v-btn>
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
      ...mapActions(['addToCart']),
      toChk() {
        this.$route.params.item = this.itemsQuantity;
      }
    }




  }
</script>
