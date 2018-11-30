<template>
  <div>
    <h1 class="display-1 text-xs-center">{{$t('homePage.testimonialsSection.title')}}</h1>
    <Flickity ref="flickity" :options="flickityOptions" class="main-gallery">

      <div class="gallery-cell" v-for="(item,i) in items" :key="i">

        <div class="testimonial">
          <q class="testimonial-quote">{{ item.title }}</q>
          <span class="testimonial-author">{{ item.text }}</span>
        </div>
      </div>
    </Flickity>
  </div>
</template>

<script>
  import Flickity from 'vue-flickity';

  export default {
    name: 'Testimonials',
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
    computed: {
      items: function () {
        return [
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element1.title'),
            text: this.$tc('testimonials.element1.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element2.title'),
            text: this.$tc('testimonials.element2.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element3.title'),
            text: this.$tc('testimonials.element3.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element4.title'),
            text: this.$tc('testimonials.element4.text')
          },
          /*{
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element5.title'),
            text: this.$tc('testimonials.element5.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element6.title'),
            text: this.$tc('testimonials.element6.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element7.title'),
            text: this.$tc('testimonials.element7.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element8.title'),
            text: this.$tc('testimonials.element8.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element9.title'),
            text: this.$tc('testimonials.element9.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element10.title'),
            text: this.$tc('testimonials.element10.text')
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: this.$tc('testimonials.element11.title'),
            text: this.$tc('testimonials.element11.text')
          }
          */
        ];
      }
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
