<template>
  <div class="card text-xs-center">
    <div :class="product.image_class"></div>

    <div class="card-block">
      <h5 class="card-title" v-if="this.$i18n.locale==='ro'">{{product.title}}</h5>
      <h5 class="card-title" v-else>{{product.titleRu}}</h5>
      <p class="card-text" v-if="this.$i18n.locale==='ro'">{{product.price | formatMoney}}</p>
      <p class="card-text" v-else>{{product.price | formatMoneyRu}}</p>
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
    border-bottom: solid 3px #DFDFDF;
  }

  .product-2 {
    padding-bottom: 75%;
    background: url('./../../../assets/product-2.jpg') no-repeat center center #ddd;
    background-size: 100%;
    border-bottom: solid 3px #DFDFDF;
  }

  .product-3 {
    padding-bottom: 75%;
    background: url('./../../../assets/product-3.jpg') no-repeat center center #ddd;
    background-size: 100%;
    border-bottom: solid 3px #DFDFDF;
  }

  .card {
    margin: 20px;
  }

  .card-text {
    font-weight: bold;
  }
</style>
