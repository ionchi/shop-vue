<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-btn icon @click.stop="sidebar = !sidebar" class="close-btn">
        <v-icon>close</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          to="/"
          v-scroll-to="{ el: '#home' }">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Dryco</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-scroll-to="{ el: '#about', offset: -45 }"
          to="/">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Despre noi</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-scroll-to="{ el: '#our-products', offset: -45 }"
          to="/">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Produse</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-scroll-to="{ el: '#contact', offset: -45 }"
          to="/">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Contacteaza-Ne</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-scroll-to="{ el: '#faq', offset: -45 }"
          to="/">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Intrebari frecvente</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          to="/shop">
          <v-list-tile-action>
            <v-icon>shopping_cart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Cumpara</v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div class="phoneNrPhone">
        <v-btn icon href="tel:060362829">
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
        <router-link to="/" tag="span" style="cursor: pointer" v-scroll-to="{ el: '#home', offset: -45 }">
          <v-avatar
            :tile="tile"
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
        <v-btn icon href="tel:060362829">
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
          v-scroll-to="{ el: '#home', offset: -45}">
          <v-icon left dark>home</v-icon>
          Dryco
        </v-btn>
        <v-btn
          flat
          small
          v-scroll-to="{ el: '#about', offset: -60 }">
          Despre noi
        </v-btn>
        <v-btn
          flat
          small
          v-scroll-to="{ el: '#our-products', offset: -60 }">
          Produse
        </v-btn>
        <v-btn
          flat
          small
          v-scroll-to="{ el: '#contact', offset: -60 }">
          Contacteaza-Ne
        </v-btn>

        <v-btn
          flat
          large
          to="/shop">
          <v-icon left dark>shopping_cart</v-icon>
          Cumpara
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
        <v-card-title class="teal">
          <strong class="subheading">Conectează-te cu noi pe rețelele sociale!</strong>

          <v-spacer></v-spacer>

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
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
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
</style>
