<template>
  <v-btn fab dark small color="success" @click="addToCart(product)"><v-icon dark>add</v-icon></v-btn>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'AddOneToCart',
    props: {
      product: Object
    },
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped>

</style>
