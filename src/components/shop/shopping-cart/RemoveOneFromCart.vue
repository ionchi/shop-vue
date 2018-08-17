<template>
  <v-btn fab dark small color="error" @click="removeOneFromCart(product)"><v-icon dark>remove</v-icon></v-btn>
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
