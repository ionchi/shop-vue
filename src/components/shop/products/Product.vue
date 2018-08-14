<template>
  <div class="card text-xs-center">
    <div :class="product.image_class"></div>

    <div class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.price | formatMoney}} - Stock: {{product.inventory}}</p>
      <AddToCart :product="product" />
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>

<style scoped>
  .product-1 {
    padding-bottom: 75%;
    background: url('./../../../assets/product-1.jpg') no-repeat center center #ddd;
    background-size: 100%;
  }

  .product-2 {
    padding-bottom: 75%;
    background: url('./../../../assets/product-2.jpg') no-repeat center center #ddd;
    background-size: 100%;
  }

  .product-3 {
    padding-bottom: 75%;
    background: url('./../../../assets/product-3.jpg') no-repeat center center #ddd;
    background-size: 100%;
  }
</style>
