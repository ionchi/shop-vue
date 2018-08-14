<template>


  <v-container>
    <v-flex xs12 sm12 class="my-3">
      <div>
        <h1 class="display-1">Comanda</h1>
      </div>
    </v-flex>
    <v-layout justify-center row fill-height>
      <v-flex xs12 sm5 class="my-4">
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

  export default {
    name: 'Checkout',
    components: {
      OrderForm,
      ShoppingCart
    },
    methods: {
      buy () {
        window.alert('You bought :)');
        window.location.href = "/";
      }
    }
  };
</script>

<style scoped>

</style>
