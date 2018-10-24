<template>
  <div>
    <h1 class="display-1 text-xs-center">{{$t('homePage.testimonialsSection.title')}}</h1>
    <Flickity ref="flickity" :options="flickityOptions" class="main-gallery">
      <div class="gallery-cell" v-for="i in 5" :key="i">
        <div class="testimonial">
          <q class="testimonial-quote">{{$t('workInProgress.testimonials.text')}}</q>
          <span class="testimonial-author">{{$t('workInProgress.testimonials.name')}}</span>
        </div>
      </div>
    </Flickity>
  </div>
</template>

<script>
  import Flickity from 'vue-flickity';

  export default {
    name: 'TestimonialsWorkInProgress',
    components: {
      Flickity
    },
    data() {
      return {
        flickityOptions: {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          prevNextButtons: true,
          pageDots: false,
          autoPlay: 5000
        }
      };
    },
    methods: {
      next() {
        this.$refs.flickity.next();
      },

      previous() {
        this.$refs.flickity.previous();
      }
    }
  };
</script>

<style scoped>
  .main-gallery {
    background: #fafafa;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    border-top: solid 10px #307167;
  }

  .gallery-cell {
    width: 100%;
    height: 250px;
  }

  @media only screen and (max-width: 600px) {
    .gallery-cell {
      height: 300px;
    }

    .testimonial {
      margin: 100px auto 130px auto;
    }
  }

  .testimonial {
    text-align: center;
    max-width: 850px;
    margin: 75px auto 130px auto;
    padding: 0 20px;
  }

  .testimonial-quote {
    display: block;
    font-size: 24px;
    font-weight: 300;
    padding: 10px 0;
  }

  .testimonial-author {
    display: block;
    font-weight: 800;
    color: #307167;
  }

  .flickity-page-dots .dot.is-selected {
    background: #307167;
  }

</style>
