<template>
  <div class="container" v-html="$t('shipping.policy')"></div>
</template>

<script>
  export default {
    name: 'Shipping'
  };
</script>

<style scoped>
  .container {
    margin-top: 30px;
  }

  .rules {
    margin-top: 30px;
  }
</style>
