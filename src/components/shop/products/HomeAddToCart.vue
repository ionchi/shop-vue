<template>
  <v-layout row>
    <v-flex xs12 md12 lg4>
      <span class="price-tag" v-if="this.$i18n.locale==='ro'">{{product.price | formatMoney}}</span>
      <span class="price-tag-ru" v-else>{{product.price | formatMoneyRu}}</span>
    </v-flex>
    <v-flex xs12 md12 lg8>
      <v-btn color="info" class="drycoBtn" :disabled="!product.inventory" @click="addToCart(product)"
           @click.prevent="changeLocaleUrl()" to="/shop">{{$t('homePage.ourProductsSection.addToCartBtn')}}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'HomeAddToCart',
    props: {
      product: Object
    },
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    methods: {
      ...mapActions ([
        'addToCart'
      ]),
      changeLocaleUrl(newLocale) {
        if (newLocale!==undefined)
          this.$i18n.locale = newLocale;
        window.history.pushState("", "", '/'+this.$i18n.locale + this.$route.path);
      }
    }
  }
</script>

<style scoped>
  .drycoBtn {
    background-color: #30BCD5 !important;
  }

  .price-tag {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 400;
  }

  .price-tag-ru {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 400;
  }

  @media only screen and (min-width: 1264px) {
    .price-tag, .price-tag-ru{
      float: left;
      margin-left: 5px;
    }

    .drycoBtn {
      float: right;
    }
  }


</style>

