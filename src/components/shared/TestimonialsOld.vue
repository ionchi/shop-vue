<template>
  <section>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="require('../../assets/testimonial-bg.jpg')"
        reverse-transition="fade"
        transition="fade"
      >
        <v-jumbotron dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h1 class="display-3 content">Comentariile Clienților</h1>
                <h3 class="display-1 sub-content font-weight-thin font-italic">{{ item.title }}</h3>
                <span class="subheading sub-content">{{ item.text }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
  export default {
    name: 'TestimonialsOld',
    data () {
      return {
        items: [
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Sunt foarte gustoase prunele :)))\"",
            text: "- Inesa Burlac"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Dryco.md va multumim pentru atitudine! calitate si punctualitate!\"",
            text: "- Tatiana Cornita"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Cum le-am primit, au trecut proba. Pentru mine sunt delicioase. Multumesc!\"",
            text: "- Mihaela Goncear Popa"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Mersi pentru prune. Paste fericit tuturor!!!\"",
            text: "- Lina Velea"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Am comandat, sunt foarte gustoase nu ezitati!\"",
            text: "- Mariana Rotari"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Sunt foarte gustoase,va multumesc!!!\"",
            text: "- Cristina Barbaros"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Am cumpărat deja 4 kg de prune uscate și sunt bune!\"",
            text: "- Iurie Apostol"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Super tare, am facut si eu comanda. Cu siguranta voi mai comanda.\"",
            text: "- Sofia Fly"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Va multumesc mult foarte gustoase prune!\"",
            text: "- Victoria Bradutanu"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Va multumim foarte bune prune!!!\"",
            text: "- Sirbu Maria"
          },
          {
            src: '@/assets/testimonial-bg.png',
            title: "\"Mulțumesc mult! Prune gustoase, livrare rapida.\"",
            text: "- Bonnie Bo"
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .content {
    color: #000000;
    padding:15px;
    position:relative;
    background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
    background: rgba(204, 204, 204, 0.7);
  }

  .sub-content {
    color: #000000;
    padding:5px;
    position:relative;
    background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
    background: rgba(204, 204, 204, 0.7);
  }
</style>
