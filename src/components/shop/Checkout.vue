<template>
  <v-container>
    <v-flex xs12 sm12>
      <div>
        <h3 class="titleChk">Comanda</h3>
      </div>
    </v-flex>
    <v-layout justify-center row fill-height>
      <v-flex xs11 sm5 class="my-4">
        <ShoppingCart />
      </v-flex>
      <v-flex xs12 sm7>
        <OrderForm/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ShoppingCart from './shopping-cart/ShoppingCart'
  import OrderForm from './OrderForm'
  import store from '../../store'

  export default {
    name: 'Checkout',
    components: {
      OrderForm,
      ShoppingCart
    },
    beforeRouteEnter (to, from, next) {
      if (store.getters.itemsQuantity > 0) next();
      else next('/shop');
    }
  };
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    .titleChk {
      margin: 50px auto 0 auto;
    }
  }
</style>
