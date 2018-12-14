<template>
  <div>
    <section id="home">
      <progressive-background :src="require('../assets/plum-tree.png')" class="center">
        <div slot="content" slot-scope="{ visible }" class="center">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <vue-typer
              :text='[$t("typer.first"),$t("typer.second")]'
              :repeat='Infinity'
              initial-action='typing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='2000'
              :erase-delay='250'
              erase-style='clear'
              :erase-on-complete='false'
              caret-animation='smooth'
              class="text-xs-center center__text"
            ></vue-typer>
            <v-btn
              class="mt-2 drycoBtn"
              color="info"
              large
              depressed
              @click.prevent="changeLocaleUrl()"
              to="/shop"
            >
              {{$t("typer.button")}}
            </v-btn>
          </v-layout>
        </div>
      </progressive-background>
    </section>

    <section id="about">
      <v-container grid-list-xl>
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h1 class="display-1">{{$t('homePage.aboutSection.title')}}</h1>
          </div>
        </v-flex>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12 sm5 my-6>
            <v-card class="elevation-0 transparent">
              <div class="farm-about-content">
                <h3 class="headline">{{$t('homePage.aboutSection.headline')}}</h3>
                <h4 class="subheading"><span class="number">1</span>{{$t('homePage.aboutSection.pointOne')}}</h4>
                <h4 class="subheading"><span class="number">2</span>{{$t('homePage.aboutSection.pointTwo')}}</h4>
                <h4 class="subheading"><span class="number">3</span>{{$t('homePage.aboutSection.pointThree')}}</h4>
                <v-layout
                  column
                  align-center
                  justify-center
                  class="white--text"
                >
                  <v-btn
                    class="mt-2 drycoBtn"
                    color="info"
                    dark
                    large
                    @click.prevent="changeLocaleUrl()"
                    to="/"
                    v-scroll-to="{ el: '#contact', offset: -45 }"
                  >
                    {{$t('homePage.aboutSection.contactUsBtn')}}
                  </v-btn>
                </v-layout>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5>
            <b-img :src="require('../assets/plum.png')" fluid alt="despre dryco" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-divider></v-divider>

    <section id="our-products">
      <br>
      <br>
      <HomeProductList/>
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
            <h1 class="display-1">{{$t('homePage.howWeWorkSection.title')}}</h1>
          </div>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
          <div id="services" class="container">
            <div class="row clearfix service-list">
              <div class="col-xs-12 col-sm-12 col-md-3 service-item">
                <router-link to="/shop">
                  <div class="circle"><i class="fa fa-cart-plus"></i></div>
                </router-link>
                <div class="headline">
                  {{$t('homePage.howWeWorkSection.stepOne.title')}}
                </div>
                <div class="text">
                  {{$t('homePage.howWeWorkSection.stepOne.message')}}
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 service-item">
                <div class="circle"><i class="fa fa-check-double"></i></div>
                <div class="headline">{{$t('homePage.howWeWorkSection.stepTwo.title')}}</div>
                <div class="text">
                  {{$t('homePage.howWeWorkSection.stepTwo.message')}}
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 service-item">
                <router-link to="/shipping">
                  <div class="circle"><i class="fa fa-shipping-fast"></i></div>
                </router-link>
                <div class="headline">
                  {{$t('homePage.howWeWorkSection.stepThree.title')}}
                </div>
                <div class="text">
                  {{$t('homePage.howWeWorkSection.stepThree.message')}}
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 service-item">
                <div class="circle"><i class="fa fa-hand-holding-usd"></i></div>
                <div class="headline">{{$t('homePage.howWeWorkSection.stepFour.title')}}</div>
                <div class="text">
                  {{$t('homePage.howWeWorkSection.stepFour.message')}}
                </div>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <v-divider></v-divider>

    <section>
      <v-container id="faq">
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h1 class="display-1">{{$t('homePage.faqSection.title')}}</h1>
          </div>
        </v-flex>
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 sm5>
            <b-img  :src="require('../assets/faq.png')" fluid alt="intrebari frecvente" />
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

    <v-divider></v-divider>

    <section id="contact">
      <v-container>
        <v-flex xs12 sm12 class="my-3">
          <div class="text-xs-center">
            <h1 class="display-1">{{$t('homePage.contactSection.title')}}</h1>
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
                    <h3>{{$t('homePage.contactSection.addressHeader')}}</h3>
                    <p v-html="$t('homePage.contactSection.address')"></p>
                  </div>
                </v-list-tile>
                <v-list-tile class="single-contact">
                  <div class="contact-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="contact-content">
                    <h3>{{$t('homePage.contactSection.phoneHeader')}}</h3>
                    <p>(+373) 60 362 829</p>
                  </div>
                </v-list-tile>
                <v-list-tile class="single-contact">
                  <div class="contact-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="contact-content">
                    <h3>{{$t('homePage.contactSection.emailHeader')}}</h3>
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

    <Testimonials/>
  </div>
</template>

<script>
  import { VueTyper } from 'vue-typer'
  import Testimonials from './shared/Testimonials'
  import ContactForm from './ContactForm'
  import Faq from './Faq'
  import HomeProductList from './shop/products/HomeProductList'

  export default {
    name: 'HomePage',
    components: {
      Testimonials,
      VueTyper,
      ContactForm,
      Faq,
      HomeProductList
    },
    methods: {
      changeLocaleUrl(newLocale) {
        if (newLocale!==undefined)
          this.$i18n.locale = newLocale;
        window.history.pushState("", "", '/'+this.$i18n.locale + this.$route.path);
      }
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
  .farm-about-content h4 .number {
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

  #services{margin:0px auto;padding-bottom:25px;}
  #services .service-list .service-item{display:inline-block;float:left;list-style:none;padding-bottom:50px;position:relative;}
  #services .circle{background:#f1f1f1;width:120px;height:120px;transform:scale(1);border-radius:50em;margin:20px auto 0 auto;transition:all .4s ease-in-out;border:2px solid transparent;}
  #services:hover .circle{}
  #services .circle:after{content:"";display:block;border-radius:50em;width:100%;height:100%;border:2px solid #b2b2b2;margin:-2px 0px 0px -2px;transition:all .4s ease-in-out;}
  #services .service-item:hover .circle:after{content:"";display:block;border-radius:50em;width:125%;height:125%;border:2px solid #30BCD5;margin:-17px 0px 0px -17px;transition:all .4s ease-in-out;}
  #services i.fa{color:#757575;font-size:40px;position:absolute;top:38px;left:37px;transition:all .4s ease-in-out;}
  #services .service-item:hover i.fa{color:#30BCD5;}
  #services .headline{width:100%;padding:0 25px;text-align:center;position:relative;top:10px;text-transform:uppercase;font-weight:bold;font-size:19px;color:#757575;transition:all .4s ease-in-out;}
  #services .headline:after{content:"";background:#9e9e9e;width:40px;height:2px;position:absolute;display:block;left:50%;bottom:-10px;margin-left:-20px;transition:all .4s ease-in-out;}
  #services .service-item:hover .headline:after{background:#30BCD5;}
  #services .service-item:hover .headline{top:25px;color:#30BCD5;}
  #services .text{width:100%;padding:0 25px;text-align:center;position:relative;top:30px;color:#757575;transition:all .4s ease-in-out;}
  #services .service-item:hover .text{top:45px;color:#333;}

  .center {
    display: flex;
    width: 100vw;
    height: 50vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media only screen and (max-width: 600px) {
    .center {
      height: 75vh;
    }
  }

  .center__text {
    font-size: 40px;
    padding: 5px 10px;
  }

  .drycoBtn {
    background-color: #30BCD5 !important;
  }
</style>

<style>
  vue-typer {
    white-space: pre;
  }

  .vue-typer .custom.char.typed {
    color: #fff;
  }
  .vue-typer .custom.char.selected {
    color: #000;
  }

  .vue-typer .custom.caret.typing {
    background-color: #fff;
  }

  .vue-typer .custom.caret {
    background-color: #000;
  }

  .vue-typer .custom.caret.idle.pre-erase {
    background-color: #fff;
  }
</style>
