<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-layout row align-center justify-center>
            <v-flex xs11 sm5>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :label="$t('checkout.form.name') + '*'"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm5 offset-sm1>
              <v-text-field
                v-model="surname"
                :rules="surnameRules"
                :label="$t('checkout.form.surname') + '*'"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-text-field
                v-model="address"
                :rules="addressRules"
                :label="$t('checkout.form.address') + '*'"
                :counter="25"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm2>
              <v-text-field
                v-model="block"
                :label="$t('checkout.form.block')"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm2 offset-sm1>
              <v-text-field
                v-model="floor"
                :label="$t('checkout.form.floor')"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm2 offset-sm1>
              <v-text-field
                v-model="unit"
                :label="$t('checkout.form.unit')"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm2 offset-sm1>
              <v-text-field
                v-model="interphone"
                :label="$t('checkout.form.interphone')"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                :label="$t('checkout.form.phone') + '*'"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('checkout.form.email')"
              ></v-text-field>
            </v-flex>
            <v-flex xs11 sm11>
              <v-textarea
                v-model="info"
                :label="$t('checkout.form.info')"
              ></v-textarea>
            </v-flex>
            <v-flex xs11 sm11>
              <v-radio-group v-model="payment" row :mandatory="false">
                <v-radio color="indigo darken-3" :label="$t('checkout.form.payment.cash')" value="numerar"></v-radio>
                <v-radio color="indigo darken-3" :label="$t('checkout.form.payment.card')" value="card"></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs11 sm11>
              <v-btn
                :loading="loading"
                :disabled="!valid"
                @click="clickHandler"
                id="order"
              >
                {{$t('checkout.form.sendBtn')}}
              </v-btn>
              <v-btn @click="clear">{{$t('checkout.form.clearBtn')}}</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
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
      ]),
      nameRules: function () {
        return [
          v => !!v || this.$tc('checkout.form.nameRule')
        ];
      },
      surnameRules: function () {
        return [
          v => !!v || this.$tc('checkout.form.surnameRule')
        ];
      },
      emailRules: function () {
        return [
          v => (/.+@.+/.test(v) || v==='' || v === " " || v === undefined) || this.$tc('checkout.form.emailRule')
        ];
      },
      phoneRules: function () {
        return [
          value => {
            const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im; // (123)456-7890, 1234567890, +31636363634...
            if (value) var digits = value.replace(/\s/g, '');
            return phonePattern.test(digits) || this.$tc('checkout.form.phoneRule');
          }
        ];
      },
      addressRules: function () {
        return [
          v => !!v || this.$tc('checkout.form.addressRule1'),
          v => (v && v.length <= 25) || this.$tc('checkout.form.addressRule2')
        ];
      }
    },
    data() {
      return {
        loader: null,
        loading: false,
        valid: false,
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        unit: '',
        block: '',
        interphone: '',
        info: '',
        payment: 'numerar',
        floor: ''
      };
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.loader='loading';
          // Native form submission is not yet supported
          axios.post('../api/sendorder.php', {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            address: this.address,
            unit: this.unit,
            block: this.block,
            floor: this.floor,
            interphone: this.interphone,
            info: this.info,
            payment: this.payment,
            cartProducts: this.cartProducts,
            shipping: this.shipping,
            subtotal: this.subtotal,
            total: this.total
          })
            .then(response => {
              this.$refs.form.reset();
              window.location = '/' + this.$i18n.locale + '/thank-you';
              //this.$router.push({ path: '/thank-you' });
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
      clickHandler() {
        this.submit();
      }
    },
    watch: {
      loader () {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => (this[l] = false), 4000);

        this.loader = null;
      }
    }
  };
</script>
