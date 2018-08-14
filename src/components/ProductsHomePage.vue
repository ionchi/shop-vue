<template>
  <v-container grid-list-xl>
    <v-flex xs12 sm12 class="my-3">
      <div class="text-xs-center">
        <h1 class="display-1">Our products</h1>
      </div>
    </v-flex>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm4>
        <v-card>
          <v-card-media
            :src="require('../assets/product-1.jpg')"
            height="250px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Prune Moi</h3>
              <div>Sunt delicioase, nu necesită prelucrare, pot fi utilizate pentru deserturi şi alte delicii culinare.</div>
            </div>
          </v-card-title>

          <v-card-actions >
            <v-spacer></v-spacer>
            <v-btn color="success my-2">Shop</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4>
        <v-card>
          <v-card-media
            :src="require('../assets/product-2.jpg')"
            height="250px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Prune Tari</h3>
              <div>Sunt cele mai sănătoase, bune pentru copii mici şi bunici.</div>
            </div>
          </v-card-title>

          <v-card-actions >
            <v-spacer></v-spacer>
            <v-btn color="success my-2">Shop</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4>
        <v-card>
          <v-card-media
            :src="require('../assets/product-3.jpg')"
            height="250px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Prune Fără Sâmbure</h3>
              <div>Sunt dulci, ideale pentru a fi consumate la birou, în transport sau la o plimbare în aer liber cu prietenii.</div>
            </div>
          </v-card-title>

          <v-card-actions >
            <v-spacer></v-spacer>
            <AddToCart :product="product" />
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AddToCart from './shop/products/AddToCart'
  export default {
    name: 'ProductsHomePage',
    props: {
      product: Object
    },
    components: { AddToCart }
  };
</script>

<style scoped>

</style>
