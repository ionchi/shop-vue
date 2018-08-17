<template>
  <div>
    <h1 class="display-1 text-xs-center">Comentariile Clienților</h1>
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
        },
        items: [
          {
            src: '@/assets/testimonial-bg.png',
            title: "Sunt foarte gustoase prunele :)))",
            text: "- Inesa Burlac"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Dryco.md va multumim pentru atitudine! calitate si punctualitate!",
            text: "- Tatiana Cornita"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Cum le-am primit, au trecut proba. Pentru mine sunt delicioase. Multumesc!",
            text: "- Mihaela Goncear Popa"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Mersi pentru prune. Paste fericit tuturor!!!",
            text: "- Lina Velea"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Am comandat, sunt foarte gustoase nu ezitati!",
            text: "- Mariana Rotari"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Sunt foarte gustoase,va multumesc!!!",
            text: "- Cristina Barbaros"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Am cumpărat deja 4 kg de prune uscate și sunt bune!",
            text: "- Iurie Apostol"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Super tare, am facut si eu comanda. Cu siguranta voi mai comanda.",
            text: "- Sofia Fly"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Va multumesc mult foarte gustoase prune!",
            text: "- Victoria Bradutanu"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Va multumim foarte bune prune!!!",
            text: "- Sirbu Maria"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "Mulțumesc mult! Prune gustoase, livrare rapida.",
            text: "- Bonnie Bo"
          }
        ]
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
    border-top: solid 10px #7AA641;
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
    color: #7AA641;
  }

  .flickity-page-dots .dot.is-selected {
    background: #7AA641;
  }

</style>
