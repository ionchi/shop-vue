<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nume"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Telefon"
            required
          ></v-text-field>
          <v-text-field
            v-model="address"
            :rules="addressRules"
            label="Adresa"
            :counter="25"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            Trimite
          </v-btn>
          <v-btn @click="clear">Sterge</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Comanda dvs a fost plasata cu succes</v-card-title>

        <v-card-text>
          Va multumim! Vă vom contacta în curând...
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="redirectHome()"
          >
            Închide
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'OrderForm',
    computed: {
      ...mapGetters([
        'subtotal',
        'shipping',
        'total',
        'cartProducts'
      ])
    },
    data() {
      return {
        dialog: false,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Este nevoie de nume',
        ],
        email: '',
        emailRules: [
          v => /.+@.+/.test(v) || 'Adresa e-mail trebuie sa fie valida'
        ],
        phone: '',
        phoneRules: [
          value => {
            const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im; // (123)456-7890, 1234567890, +31636363634...
            if (value) var digits = value.replace(/\s/g, '');
            return phonePattern.test(digits) || 'Numar invalid';
          }
        ],
        address: '',
        addressRules: [
          v => !!v || 'Este nevoie de adresa',
          v => (v && v.length <= 25) || 'Numele trebuie sa aiba mai putin de 25 de litere'
        ]
      };
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('../api/sendorder.php', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            cartProducts: this.cartProducts,
            shipping: this.shipping,
            subtotal: this.subtotal,
            total: this.total
          })
            .then(response => {
              this.dialog = true;
              this.$refs.form.reset();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      clear () {
        this.$refs.form.reset();
      },
      redirectHome () {
        this.dialog = false;
        window.location = "/";
      }
    }
  };
</script>
