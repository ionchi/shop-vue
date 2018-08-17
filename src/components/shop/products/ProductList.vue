<template>
  <div>
    <v-layout
      align-space-between justify-center row fill-height
      v-for="row in productRows" :key="row.id"
    >
      <v-flex xs10 sm3 v-for="product in row" :key="product.id">
        <Product :product="product" track-by="id" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'

export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 3)
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  created () {
    this.getProducts();
  }
}
</script>
