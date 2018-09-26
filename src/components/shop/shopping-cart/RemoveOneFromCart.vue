<template>
  <v-btn fab dark small color="info" class="drycoBtn" @click="removeOneFromCart(product)"><v-icon dark>remove</v-icon></v-btn>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'RemoveOneFromCart',
    props: {
      product: Object
    },
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    methods: {
      ...mapActions(['removeOneFromCart'])
    }
  }
</script>

<style scoped>
  .drycoBtn {
    background-color: #30BCD5 !important;
  }
</style>
