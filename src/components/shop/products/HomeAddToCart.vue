<template>
  <v-btn color="info" :disabled="!product.inventory" @click="addToCart(product)" to="/shop">Adaugă în Coș!</v-btn>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'HomeAddToCart',
    props: {
      product: Object
    },
    methods: mapActions([
      'addToCart'
    ])
  }
</script>
