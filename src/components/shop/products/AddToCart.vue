<template>
  <v-btn color="info" :disabled="!product.inventory" @click="addToCart(product)">Adaugă în Coș!</v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddToCart',
  props: {
    product: Object
  },
  methods: mapActions([
    'addToCart'
  ])
}
</script>
