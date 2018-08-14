<template>
  <div class="card text-xs-center">
    <div :class="product.image_class"></div>

    <div class="card-block">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.description}}</p>
      <HomeAddToCart :product="product" />
    </div>
  </div>
</template>

<script>
  import HomeAddToCart from './HomeAddToCart'

  export default {
    name: 'HomeProduct',
    props: {
      product: Object
    },
    components: { HomeAddToCart }
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
