<template>
  <div class="media mb-1">
    <div class="media-left">
      <div class="media-object rounded thumb"></div>
    </div>
    <div class="media-body">
      <strong class="d-block">{{item.title}}</strong>
      <span>Pret: {{item.price | formatMoney}}/kg</span> <strong> | </strong>
      <span>{{item.quantity}} kg - {{(item.price*item.quantity) | formatMoney}}</span>
    </div>
  </div>
</template>

<script>
  import RemoveFromCart from './../products/RemoveFromCart'
  import RemoveOneFromCart from './RemoveOneFromCart'
  import AddOneToCart from './AddOneToCart'

  export default {
    name: 'ShoppingCartItemCheckout',
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

</style>
