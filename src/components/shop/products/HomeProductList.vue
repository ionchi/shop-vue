<template>
  <v-container grid-list-xl>
    <v-flex xs12 sm12 class="my-3">
      <div class="text-xs-center">
        <h1 class="display-1">{{$t('homePage.ourProductsSection.title')}}</h1>
        <div class="subheading mb-3 text-xs-center">{{$t('homePage.ourProductsSection.subheading')}}</div>
      </div>
    </v-flex>
    <v-layout align-center justify-center row fill-height v-for="row in productRows" :key="row.id">
      <v-flex xs12 sm4 v-for="product in row" :key="product.id">
        <HomeProduct :product="product" track-by="id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HomeProduct from './HomeProduct'
  import { mapActions, mapState } from 'vuex'
  import chunk from 'chunk'

  export default {
    name: 'HomeProductList',
    computed: mapState({
      productRows: state => chunk(state.products.all, 3)
    }),
    methods: mapActions([
      'getProducts'
    ]),
    components: { HomeProduct },
    created () {
      this.getProducts();
    }
  }
</script>
