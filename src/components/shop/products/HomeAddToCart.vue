<template>
  <v-btn color="info" class="drycoBtn" :disabled="!product.inventory" @click="addToCart(product)" @click.prevent="changeLocaleUrl()" to="/shop">{{$t('homePage.ourProductsSection.addToCartBtn')}}</v-btn>
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
</style>

