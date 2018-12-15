<template>
  <div>
    <div class="container" id="shop-container">
      <div class="row mt-2">
        <div class="col-sm-12">
          <div class="text-xs-center titleCart">
            <h3>{{$t('shop.header')}}</h3>
            <em class="sub-content">{{$t('shop.subheader')}}</em>
          </div>
          <ShoppingCart />

          <div class="row">
            <div class="col-md-6 col-sm-12">
              <Coupon class="text-lg-left text-xs-center"></Coupon>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="mt-1 chk-btn text-lg-right text-xs-center">
              <v-btn color="success" to="/checkout" class="drycoBtnGreen checkBtn" :disabled="!itemsQuantity"
                     @click.prevent="changeLocaleUrl()">{{$t('shop.orderBtn')}}</v-btn>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12">
          <v-divider></v-divider>
          <ProductList />
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    <Testimonials/>
  </div>
</template>

<script>
  import ProductList from './products/ProductList'
  import ShoppingCart from './shopping-cart/ShoppingCart'
  import { mapGetters } from 'vuex'
  import Testimonials from '../shared/Testimonials';

  import Coupon from './shopping-cart/Coupon';

  export default {
    name: 'Shop',
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    components: {
      Testimonials,
      ProductList,
      ShoppingCart,
      Coupon
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

  .checkBtn {
    margin-top: 15px;
    margin-right: 30px;
  }

  @media only screen and (max-width: 600px) {
    .titleCart {
      margin: 50px auto 0 auto;
    }

    .checkBtn {
      margin: 0;
    }
  }
</style>
