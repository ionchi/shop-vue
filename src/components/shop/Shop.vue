<template>
  <div>
    <div class="container">
      <div class="row mt-2">
        <div class="col-sm-12">
          <h3>Cos</h3>
          <em class="sub-content">Livrare Gratis de la 120 lei!</em>
          <ShoppingCart />
          <div class="mt-1 text-xs-center chk-btn">
            <v-btn color="success" to="/checkout" :disabled="!itemsQuantity">Plasează Comanda!</v-btn>
          </div>
        </div>
        <div class="col-sm-12">
          <ProductList />
        </div>
      </div>
    </div>
    <Testimonials/>
  </div>
</template>

<script>
  import ProductList from './products/ProductList'
  import ShoppingCart from './shopping-cart/ShoppingCart'
  import { mapGetters } from 'vuex'
  import Testimonials from '../shared/Testimonials';

  export default {
    name: 'Shop',
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    components: {
      Testimonials,
      ProductList,
      ShoppingCart
    }
  }
</script>

<style scoped>
  .chk-btn {
    margin-bottom: 20px;
  }
</style>
