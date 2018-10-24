<template>
  <div>
    <div class="container">

      <div class="row mt-2">

        <div class="col-sm-12">

          <div class="text-xs-center titleCart">
            <v-alert
              :value="true"
              type="warning"
            >
              {{$t('workInProgress.shop-alert')}}
            </v-alert>
            <h3>{{$t('shop.header')}}</h3>
            <em class="sub-content">{{$t('shop.subheader')}}</em>
          </div>
          <ShoppingCart />
          <div class="mt-1 text-xs-center chk-btn">
            <v-btn color="success" to="/checkout" class="drycoBtnGreen" :disabled="!itemsQuantity" @click.prevent="changeLocaleUrl()">{{$t('shop.orderBtn')}}</v-btn>
          </div>
        </div>

        <div class="col-sm-12">
          <v-divider></v-divider>
          <ProductList />
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    <TestimonialsWorkInProgress/>
  </div>
</template>

<script>
  import ProductList from './products/ProductList'
  import ShoppingCart from './shopping-cart/ShoppingCart'
  import { mapGetters } from 'vuex'
  import TestimonialsWorkInProgress from '../shared/TestimonialsWorkInProgress';

  export default {
    name: 'Shop',
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    components: {
      TestimonialsWorkInProgress,
      ProductList,
      ShoppingCart
    },
    methods: {
      changeLocaleUrl(newLocale) {
        if (newLocale!==undefined)
          this.$i18n.locale = newLocale;
        window.history.pushState("", "", '/'+this.$i18n.locale + this.$route.path);
      }
    }
  }
</script>

<style scoped>
  .chk-btn {
    margin-bottom: 20px;
  }

  .drycoBtnGreen {
    background-color: #307167 !important;
  }

  @media only screen and (max-width: 600px) {
    .titleCart {
      margin: 50px auto 0 auto;
    }
  }
</style>
