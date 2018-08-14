<template>
  <div>
    <section id="home">
      <v-parallax :src="require('../assets/plum-tree.png')"  height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <h1 class="content mb-2 display-1 text-xs-center">Fructe ecologice
            direct de la producător!</h1>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            to="/shop"
          >
            Cumpară
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section id="about">
      <v-container grid-list-xl>
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h1 class="display-1">Despre Noi</h1>
          </div>
        </v-flex>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12 sm5 my-6>
            <v-card class="elevation-0 transparent">
              <div class="farm-about-content">
                <h3 class="headline">Livrăm prune uscate, fără fum, direct la uşa casei tale. Doar la noi găseşti cele mai gustoase, nutritive şi ecologice prune uscate, care se află la un click distanţă de tine!</h3>
                <h4 class="subheading"><span>1</span>Noi producem şi noi le vindem, fără intermediari!</h4>
                <h4 class="subheading"><span>2</span>Preţuri accesibile şi deservire la cel mai înalt nivel!</h4>
                <h4 class="subheading"><span>3</span>Prunele ajung pe masa ta în maximum 24 de ore!</h4>
                <v-layout
                  column
                  align-center
                  justify-center
                  class="white--text"
                >
                  <v-btn
                    class="blue lighten-2 mt-2"
                    dark
                    large
                    to="/"
                    v-scroll-to="{ el: '#contact', offset: -45 }"
                  >
                    Contactează-ne
                  </v-btn>
                </v-layout>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5>
            <b-img :src="require('../assets/about-right.png')" fluid alt="About us" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-divider></v-divider>

    <section id="how-we-work">
      <v-layout

        wrap
        class="my-2"
        align-center
      >
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h1 class="display-1">Cum lucrăm</h1>
          </div>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
          <b-img  :src="require('../assets/diagram.png')" fluid alt="How we work" />
        </v-flex>
      </v-layout>
    </section>

    <v-divider></v-divider>

    <section id="our-products">
      <HomeProductList/>
    </section>

    <v-divider></v-divider>

    <section id="contact">
      <v-container>
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h1 class="display-1">Contactează-ne</h1>
          </div>
        </v-flex>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12 sm7>
            <v-card class="elevation-0 transparent">
              <v-card-text>
                <ContactForm/>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5>
            <v-card class="elevation-0 transparent">
              <v-list class="transparent">
                <v-list-tile class="single-contact">
                  <div class="contact-icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <div class="contact-content">
                    <h3>Adresa Noastră</h3>
                    <p>Alexandru cel Bun 95 <br> Chișinău, Moldova</p>
                  </div>
                </v-list-tile>
                <v-list-tile class="single-contact">
                  <div class="contact-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="contact-content">
                    <h3>Telefon</h3>
                    <p>(+373) 60 362 829</p>
                  </div>
                </v-list-tile>
                <v-list-tile class="single-contact">
                  <div class="contact-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="contact-content">
                    <h3>Adresa de e-mail</h3>
                    <p>info@dryco.md</p>
                  </div>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-divider></v-divider>

    <section>
      <v-container id="faq">
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h1 class="display-1">Întrebări Frecvente</h1>
          </div>
        </v-flex>
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 sm5>
            <b-img  :src="require('../assets/faq-right.png')" fluid alt="Faq" />
          </v-flex>
          <v-flex xs12 sm7 my-5>
            <v-card class="elevation-0 transparent" >
              <v-card-text>
                <Faq/>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <Testimonials/>
  </div>
</template>

<script>
  import Testimonials from './shared/Testimonials'
  import ContactForm from './ContactForm'
  import Faq from './Faq'
  import HomeProductList from './shop/products/HomeProductList'
  export default {
    name: 'HomePage',
    components: {
      Testimonials,
      ContactForm,
      Faq,
      HomeProductList
    }
  };
</script>

<style scoped>
  .single-contact {
    background: #f5f5f5 none repeat scroll 0 0;
    padding: 40px 0;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .contact-icon {
    background: #757575 none repeat scroll 0 0;
    border-radius: 50%;
    color: #fff;
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 30px;
    margin-right: 20px;
    text-align: center;
    width: 60px;
    font-size: 24px;
  }
  .contact-content {
    color: #757575;
    padding-top: 15px;
  }
  .contact-content > h3 {
    color: #000;
  }
  .farm-about-content h3 {
    color: #333333;
    margin-bottom: 40px;
    font-size: 18px;
  }
  .farm-about-content h4 {
    margin-bottom: 20px;
    font-size: 18px;
  }
  .farm-about-content h4 span {
    background: #333 none repeat scroll 0 0;
    border-radius: 50%;
    color: #fff;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin-right: 20px;
    text-align: center;
    width: 50px;
    position: relative;
  }
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
