<template>
  <v-btn color="info" :disabled="!product.inventory" @click="addToCart(product)" to="/shop">Adaugă în Coș!</v-btn>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'HomeAddToCart',
    props: {
      product: Object
    },
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    methods: {
      ...mapActions ([
        'addToCart'
      ])
    }
  }
</script>
