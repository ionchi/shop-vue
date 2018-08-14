<template>
  <v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">

      <v-btn flat><router-link class="nav-link" to="/">Home</router-link></v-btn>
      <v-btn flat><router-link class="nav-link" to="/shop">Shop</router-link></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'PageHeader'
  }
</script>
