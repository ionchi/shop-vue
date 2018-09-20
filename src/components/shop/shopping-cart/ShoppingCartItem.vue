<template>
  <div class="media mb-1">
    <v-layout row wrap>
      <v-flex xs6 sm6>
        <div class="media-left">
          <div class="media-object rounded thumb"></div>
        </div>
        <div class="media-body align-middle">
          <strong class="d-block headline">{{item.title}}</strong>
        </div>
      </v-flex>
      <v-flex xs6 sm3>
        <div class="media-right align-center qty-section">
          <RemoveOneFromCart :product="item" />
          <span class="qty">{{item.quantity}} kg</span>
          <AddOneToCart :product="item" />
        </div>
      </v-flex>
      <v-flex xs8 offset-xs2 sm3 offset-sm0 class="price-section text-xs-center">
        <v-layout row wrap>
          <v-flex xs6>
            <span class="d-block font-weight-medium">Pret</span>
            <span class="d-block">{{item.price | formatMoney}}</span>
          </v-flex>
          <v-flex xs6>
            <span class="d-block font-weight-medium">Total</span>
            <span class="d-block">{{(item.price*item.quantity) | formatMoney}}</span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import RemoveFromCart from './../products/RemoveFromCart'
  import RemoveOneFromCart from './RemoveOneFromCart'
  import AddOneToCart from './AddOneToCart'

  export default {
    name: 'ShoppingCartItem',
    props: {
      item: Object
    },
    components: {
      RemoveFromCart,
      RemoveOneFromCart,
      AddOneToCart
    }
  }
</script>

<style scoped>
  .thumb {
    height: 60px;
    width: 60px;
    background: url('./../../../assets/product-1.jpg') no-repeat center center #ddd;
    background-size: 115%;
  }

  .qty {
    font-size: 18px;
    font-weight: 600;
  }

  .media {
    width: 75%;
    margin: 10px auto;
  }

  @media only screen and (max-width: 600px) {
    .media {
      width: 95%;
      margin: 10px auto;
    }
  }

  .price-section {
    padding: 5px;
    font-size: 15px;
  }

  .qty-section {
    margin-right: 15px;
  }

</style>
