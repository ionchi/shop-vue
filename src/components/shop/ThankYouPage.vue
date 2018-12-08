<template>
  <div>
    <div class="container thank-you-container">
      <div class="row mt-2">
        <div class="col-sm-12 text-xs-center thank-you-box">
          <h3 class="display-2">{{$t('checkout.form.dialog.headline')}}</h3>
          <div style="margin-top:30px;">
            <h5 class="title font-weight-light"> {{$t('checkout.form.dialog.text')}}</h5>
          </div>
        </div>
      </div>
      <div class="mt-1 text-xs-center">
        <v-btn color="success" class="home-btn drycoBtn" @click="redirectHome()">{{$t('checkout.form.dialog.closeBtn')}}</v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <Testimonials/>
  </div>
</template>

<script>
  import Testimonials from '../shared/Testimonials';

  export default {
    name: 'ThankYouPage',
    components: {
      Testimonials,
    },
    methods: {
      redirectHome () {
        window.location = "/"+this.$i18n.locale;
      },
    }
  };
</script>

<style scoped>
  .thank-you-container {
    height: 50vh;
  }

  .thank-you-box {
    margin-top: 7%;
  }

  .home-btn {
    margin-top: 30px;
  }

  .drycoBtn {
    background-color: #30BCD5 !important;
  }

  @media only screen and (max-width: 1400px) {
    .thank-you-container {
      height: 70vh;
    }
  }

  @media only screen and (max-width: 600px) {
    .thank-you-box {
      margin: 70px auto 0 auto;
    }

    .thank-you-container {
      height: 100vh;
    }
  }
</style>
