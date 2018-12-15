<template>
  <v-layout row>
    <v-flex xs12 md12 lg4>
      <div v-if="this.$i18n.locale==='ro'">
        <div style="text-decoration: line-through;"
             class="price-tag-old" >{{product.price | saleChristmas | formatMoney}}</div>
        <div class="price-tag">{{product.price | formatMoney}}</div>
      </div>
      <div v-else>
        <div style="text-decoration: line-through;"
             class="price-tag-old-ru" >{{product.price | formatMoneyRu}}</div>
        <div class="price-tag-ru">{{product.price | saleChristmas | formatMoneyRu}}</div>
      </div>
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

  .price-tag-old {
    font-size: 14px;
    float: left;
    color: red;
  }

  .price-tag {
    font-size: 20px;
    font-weight: 400;
  }

  .price-tag-ru {
    font-size: 18px;
    font-weight: 400;
  }

  .price-tag-old-ru {
    font-size: 14px;
    float: left;
    color: red;
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

