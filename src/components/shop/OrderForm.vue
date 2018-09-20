<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-layout row align-center justify-center>
            <v-flex xs11 sm11>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Nume *"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-text-field
                v-model="address"
                :rules="addressRules"
                label="Adresa *"
                :counter="25"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm3>
              <v-text-field
                v-model="block"
                label="Bloc"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm3 offset-sm1>
              <v-text-field
                v-model="unit"
                label="Scara"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm3 offset-sm1>
              <v-text-field
                v-model="interphone"
                label="Interfon"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Telefon *"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-textarea
                v-model="info"
                label="Informatie suplimentara"
              ></v-textarea>
            </v-flex>
            <v-flex xs11 sm11>
              <v-radio-group v-model="payment" row :mandatory="false">
                <v-radio color="indigo darken-3" label="Plata in numerar" value="numerar"></v-radio>
                <v-radio color="indigo darken-3" label="Curier card de credit" value="card"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs11 sm11>
              <v-btn
                :loading="loading"
                :disabled="!valid"
                @click="submit"
              >
                Trimite
              </v-btn>
              <v-btn @click="clear">Sterge</v-btn>
            </v-flex>
          </v-layout>
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
        loader: null,
        loading: false,
        dialog: false,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Este nevoie de nume',
        ],
        email: '',
        emailRules: [
          v => (/.+@.+/.test(v) || v==='' || v === " " || v === undefined) || 'Adresa e-mail trebuie sa fie valida',
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
        ],
        unit: '',
        block: '',
        interphone: '',
        info: '',
        payment: 'numerar'
      };
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.loader='loading';
          // Native form submission is not yet supported
          axios.post('../api/sendorder.php', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            unit: this.unit,
            block: this.block,
            interphone: this.interphone,
            info: this.info,
            payment: this.payment,
            cartProducts: this.cartProducts,
            shipping: this.shipping,
            subtotal: this.subtotal,
            total: this.total,
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
        this.payment = 'numerar';
      },
      redirectHome () {
        this.dialog = false;
        window.location = "/";
      }
    },
    watch: {
      loader () {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => (this[l] = false), 3000);

        this.loader = null;
      }
    }
  };
</script>
