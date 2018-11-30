<template>
  <div class="text-wrapper">
    <div class="title-404">
      404
    </div>

    <div class="subtitle">
      {{$t('errorPage.header')}}
    </div>
    <br>
    <div class="subtitle text-md-center" v-html="$t('errorPage.subheader')">

    </div>

    <div class="buttons">
      <router-link class="button" to="/shop">{{$t('errorPage.shopBtn')}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound'
  };
</script>

<style scoped>

  .text-wrapper {
    background-color: #342643;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title-404 {
    font-size: 6em;
    font-weight: 700;
    color: #EE4B5E;
  }

  .subtitle {
    font-size: 40px;
    font-weight: 700;
    color: #1FA9D6;
  }

  .buttons {
    margin: 30px;
  }
  .buttons a.button {
    font-weight: 700;
    border: 2px solid #EE4B5E;
    text-decoration: none;
    padding: 15px;
    text-transform: uppercase;
    color: #EE4B5E;
    border-radius: 26px;
    transition: all 0.2s ease-in-out;
  }
  .buttons a.button:hover {
    background-color: #EE4B5E;
    color: white;
    transition: all 0.2s ease-in-out;
  }

</style>
