<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-btn icon @click.stop="sidebar = !sidebar" class="close-btn">
        <v-icon>close</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          to="/"
          class="menuBtn"
          @click.stop="sidebar = !sidebar">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Dryco</v-list-tile-content>
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
            <v-list-tile-content>Despre noi</v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            to="/"
            v-scroll-to="{ el: '#our-products', offset: -45 }"
            @click.stop="sidebar = !sidebar">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Produse</v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            to="/"
            v-scroll-to="{ el: '#faq', offset: -45 }"
            @click.stop="sidebar = !sidebar">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Intrebari frecvente</v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            to="/"
            v-scroll-to="{ el: '#contact', offset: -45 }"
            @click.stop="sidebar = !sidebar">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Contacteaza-Ne</v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list-tile
          to="/shop"
          @click.stop="sidebar = !sidebar">
          <v-list-tile-action>
            <v-badge right color="success">
              <span slot="badge">{{itemsQuantity}}</span>
              <v-icon
                color="grey lighten-1"
              >
                shopping_cart
              </v-icon>
            </v-badge>
          </v-list-tile-action>
          <v-list-tile-content>Cumpara</v-list-tile-content>
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
        <router-link to="/" tag="span" style="cursor: pointer">
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
        <v-btn icon href="tel:060362829" class="menuBtn">
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
        >
          <v-icon left dark>home</v-icon>
          Dryco
        </v-btn>
        <v-toolbar-items v-if="this.$route.path==='/'">
          <v-btn
            flat
            small
            class="menuBtn"
            v-scroll-to="{ el: '#about', offset: -60 }">
            Despre noi
          </v-btn>
          <v-btn
            flat
            small
            class="menuBtn"
            v-scroll-to="{ el: '#our-products', offset: -60 }">
            Produse
          </v-btn>
          <v-btn
            flat
            small
            class="menuBtn"
            v-scroll-to="{ el: '#contact', offset: -60 }">
            Contacteaza-Ne
          </v-btn>
        </v-toolbar-items>
        <v-btn
          flat
          large
          class="menuBtn"
          to="/shop">
          <v-badge right color="success">
            <span slot="badge">{{itemsQuantity}}</span>
            <v-icon left dark>shopping_cart</v-icon>
            Cumpara
          </v-badge>
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer
      dark
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="footer">
          <div class="footer-menu">
            <v-btn flat small to="/terms">Termeni si conditii</v-btn>
            <v-btn flat small to="/personal-data">Date cu caracter personal</v-btn>
            <v-btn flat small to="/shipping">Livrare</v-btn>
          </div>

          <v-spacer class="hidden-xs"></v-spacer>

          <v-btn
            class="mx-3"
            dark
            icon
          >
            <i class="fab fa-instagram fa-2x"></i>
          </v-btn>
          <v-btn
            class="mx-3"
            dark
            icon
          >
            <i class="fab fa-facebook fa-2x"></i>
          </v-btn>
        </v-card-title>

        <v-card-actions class="dark-green darken-3 justify-center">
          &copy; 2018 — <strong>dryco</strong> 	&nbsp; din 	&nbsp;<span class="fa fa-heart"></span> 	&nbsp;MOLDOVEI
        </v-card-actions>
      </v-card>
      <cookie-law
        theme="dark-lime"
        buttonText="Am intales"
        message="Acest site utilizează module cookie pentru a vă asigura să beneficiați de cea mai bună experiență pe site-ul nostru.">
      </cookie-law>
    </v-footer>
  </v-app>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    components: {CookieLaw},
    computed: {
      ...mapGetters([
        'itemsQuantity'
      ])},
    data () {
      return {
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
  .footer {
    background-color: #333333;
  }

</style>
