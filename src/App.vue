<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-btn icon @click.stop="sidebar = !sidebar" class="close-btn">
        <v-icon>close</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-if="this.$i18n.locale==='ru'"
          @click="setLang('ro')"
          @click.stop="sidebar = !sidebar">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content><flag style="font-size:20px" iso="ro"/></v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="this.$i18n.locale==='ro'"
          @click="setLang('ru')"
          @click.stop="sidebar = !sidebar">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content ><flag style="font-size:20px" iso="ru"/></v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile
          to="/"
          class="menuBtn"
          @click.stop="sidebar = !sidebar">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{$t("menu.home")}}</v-list-tile-content>
        </v-list-tile>
        <v-list v-if="this.$route.path==='/'">
          <v-list-tile
            to="/"
            class="menuBtn"
            v-scroll-to="{ el: '#about', offset: -45 }"
            @click.stop="sidebar = !sidebar">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{$t("menu.about")}}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            to="/"
            v-scroll-to="{ el: '#our-products', offset: -45 }"
            @click.stop="sidebar = !sidebar">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{$t("menu.products")}}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            to="/"
            v-scroll-to="{ el: '#faq', offset: -45 }"
            @click.stop="sidebar = !sidebar">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{$t("menu.faq")}}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            to="/"
            v-scroll-to="{ el: '#contact', offset: -45 }"
            @click.stop="sidebar = !sidebar">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{$t("menu.contact")}}</v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list-tile
          to="/shop"
          @click.stop="sidebar = !sidebar">
          <v-list-tile-action>
            <v-badge right color="success">
              <span v-if="itemsQuantity!==0" slot="badge">{{itemsQuantity}}</span>
              <v-icon
                color="grey lighten-1"
              >
                shopping_cart
              </v-icon>
            </v-badge>
          </v-list-tile-action>
          <v-list-tile-content>{{$t("menu.shop")}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div class="phoneNrPhone">
        <v-btn icon href="tel:060362829" class="menuBtn">
          <v-icon>phone</v-icon>
          &nbsp; 060 36 28 29
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click.stop="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" @click.prevent="changeLocaleUrl()" tag="span" style="cursor: pointer">
          <v-avatar
            :size="100"
            color="grey lighten-4 logo"
          >
            <img
              src="./assets/logo.png"
              alt="Logo"
            >
          </v-avatar>
        </router-link>
      </v-toolbar-title>
      <div class="phoneNr hidden-sm-and-down">
        <v-btn large flat href="tel:060362829" class="menuBtn">
          <v-icon>phone</v-icon>
          &nbsp; 060 36 28 29
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          large
          to="/"
          class="menuBtn"
          @click.prevent="changeLocaleUrl()"
        >
          <v-icon left dark>home</v-icon>
          {{$t("menu.home")}}
        </v-btn>
        <v-toolbar-items v-if="this.$route.path==='/'">
          <v-btn
            flat
            small
            class="menuBtn"
            v-scroll-to="{ el: '#about', offset: -60 }">
            {{$t("menu.about")}}
          </v-btn>
          <v-btn
            flat
            small
            class="menuBtn"
            v-scroll-to="{ el: '#our-products', offset: -60 }">
            {{$t("menu.products")}}
          </v-btn>
          <v-btn
            flat
            small
            class="menuBtn"
            v-scroll-to="{ el: '#contact', offset: -60 }">
            {{$t("menu.contact")}}
          </v-btn>
        </v-toolbar-items>
        <v-btn
          flat
          large
          class="menuBtn"
          @click.prevent="changeLocaleUrl()"
          to="/shop">
          <v-badge right color="teal darken-2" >
            <span v-if="itemsQuantity!==0" slot="badge" >{{itemsQuantity}}</span>
            <v-icon left dark >shopping_cart</v-icon>
            {{$t("menu.shop")}}
          </v-badge>
        </v-btn>
        <v-btn
          v-if="this.$i18n.locale==='ru'"
          flat
          large
          class="menuBtn"
          @click="setLang('ro')"
          @click.prevent="changeLocaleUrl('ro')"
          style="font-size:25px"><flag iso="ro"/>
        </v-btn>
        <v-btn
          v-if="this.$i18n.locale==='ro'"
          flat
          large
          class="menuBtn"
          @click="setLang('ru')"
          @click.prevent="changeLocaleUrl('ru')"
          style="font-size:25px"><flag iso="ru"/>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <footer class="flex-rw">


      <section class="footer-social-section flex-rw">
        <span class="footer-social-overlap footer-social-icons-wrapper">
          <a href="tel:060362829" class="generic-anchor" target="_blank" title="Phone" itemprop="significantLink"><i class="fas fa-phone-square"></i></a>
          <a href="https://www.facebook.com/" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i class="fab fa-facebook"></i></a>
          <a href="http://instagram.com/" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i class="fab fa-instagram"></i></a>
        </span>
      </section>
      <section class="footer-bottom-section flex-rw">
        <div class="footer-bottom-wrapper" v-html="$t('footer.copyright')">
        </div>
        <div class="footer-bottom-wrapper">
          <router-link @click.prevent="changeLocaleUrl()" to="/terms" class="generic-anchor">{{$t('footer.terms')}}</router-link> |
          <router-link @click.prevent="changeLocaleUrl()" to="/personal-data" class="generic-anchor">{{$t('footer.personal_data')}}</router-link> |
          <router-link @click.prevent="changeLocaleUrl()" to="/shipping" class="generic-anchor">{{$t('footer.shipping')}}</router-link>
        </div>
      </section>
      <cookie-law
        theme="dark-lime"
        :buttonText="$t('cookiesConsent.agreeBtn')"
        :message="$t('cookiesConsent.message')">
      </cookie-law>
    </footer>
  </v-app>
</template>



<script>
  import CookieLaw from 'vue-cookie-law'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'App',
    components: {CookieLaw},
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    data () {
      return {
        text: 'center',
        icon: 'justify',
        sidebar: false,
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ],
        appTitle: 'Shop'
      };
    },
    methods: {
      ...mapActions(['setLang']),
      changeLocaleUrl(newLocale) {
        if (newLocale!==undefined)
          this.$i18n.locale = newLocale;
        window.history.pushState("", "", '/'+this.$i18n.locale + this.$route.path);
      }
    }
  };
</script>

<style scoped>
  .close-btn {
    float: right;
  }

  .phoneNr {
    margin-left: 40px;
  }

  .phoneNrPhone {
    margin-left: 50px;
  }

  .logo {
    margin-top: 50px;
    margin-left: 50px;
  }
  @media only screen and (max-width: 600px) {
    .logo {
      margin: 50px auto 0 auto;
    }
  }
  .menuBtn {
    text-decoration: none;
  }

  .generic-anchor {
    color: #fff;
    text-decoration: none;
  }
  .generic-anchor:visited {
    color: #fff;
  }
  .generic-anchor:hover {
    color: #ccc;
  }

  .flex-rw {
    display: flex;
    flex-flow: row wrap;
  }

  footer {
    background: #307167;
    margin-top: auto;
    width: 100%;
  }

  .footer-social-section {
    width: 100%;
    align-items: center;
    justify-content: space-around;
    position: relative;
    margin-top: 5px;
  }

  .footer-social-section::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 10px;
    border-top: 1px solid #ccc;
    width: calc(100% - 20px);
  }

  .footer-social-overlap {
    position: relative;
    z-index: 2;
    background: #307167;
    padding: 0 20px;
  }

  .footer-social-connect {
    display: flex;
    align-items: center;
    font-size: 2.5em;
    color: #fff;
  }

  .footer-social-small {
    font-size: 0.6em;
    padding: 0px 20px;
  }

  .footer-social-overlap > a {
    font-size: 2em;
  }

  .footer-social-overlap > a:not(:first-child) {
    margin-left: 0.38em;
  }

  .footer-bottom-section {
    width: 100%;
    padding: 10px 30px;
    margin-top: 10px;
    background: #797D7F;
  }

  .footer-bottom-section > div:first-child {
    margin-right: auto;
  }

  .footer-bottom-wrapper {
    color: #fff;
  }

  .footer-address {
    display: inline;
    font-style: normal;
  }

  @media only screen and (max-width: 768px) {

    .footer-social-connect {
      font-size: 2.5em;
    }

    .footer-social-overlap > a {
      font-size: 2.24em;
    }

    .footer-bottom-wrapper {
      font-size: 1.3em;
    }
  }
  @media only screen and (max-width: 568px) {

    .footer-social-section {
      justify-content: center;
    }

    .footer-social-section::after {
      top: 25%;
    }

    .footer-social-connect {
      margin-bottom: 10px;
      padding: 0 10px;
    }

    .footer-social-overlap {
      display: flex;
      justify-content: center;
    }

    .footer-social-icons-wrapper {
      width: 100%;
      padding: 0;
    }

    .footer-social-overlap > a:not(:first-child) {
      margin-left: 20px;
    }

    .footer-bottom-section {
      padding: 0 5px 10px 5px;
    }

    .footer-bottom-wrapper {
      text-align: center;
      width: 100%;
      margin-top: 10px;
    }
  }
  @media only screen and (max-width: 480px) {
    .footer-social-overlap > a {
      margin: auto;
    }

    .footer-social-overlap > a:not(:first-child) {
      margin-left: 0;
    }

    .footer-bottom-rights {
      display: block;
    }
  }
  @media only screen and (max-width: 320px) {

    .footer-social-connect {
      font-size: 2.4em;
    }

    .footer-social-overlap > a {
      font-size: 2.24em;
    }

    .footer-bottom-wrapper {
      font-size: 1.3em;
    }
  }

</style>
