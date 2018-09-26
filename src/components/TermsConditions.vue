<template>
  <div class="container" v-html="$t('privacy.policy')">
  </div>
</template>

<script>
  export default {
    name: 'TermsConditions'
  };
</script>

<style scoped>
  .container {
    margin-top: 30px;
  }
</style>
