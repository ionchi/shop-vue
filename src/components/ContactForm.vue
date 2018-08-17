<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="25"
            label="Nume*"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail*"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Telefon"
          ></v-text-field>
          <v-select
            v-model="topic"
            :items="items"
            label="Subiect"
          ></v-select>
          <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Mesag"
            hint="Mesajul dvs"
            required
          ></v-textarea>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Este nevoie sa acceptati!']"
            required
          >
            <span slot="label">Sunteti de acord cu <router-link to="/terms" target="_blank">termenii si conditiile?</router-link></span>
          </v-checkbox>

          <v-btn
            color="info"
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
        <v-card-title class="headline">Mesaj trimis</v-card-title>

        <v-card-text>
          Va multumim! Vă vom contacta în curând...
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Închide
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'ContactForm',
    data: () => ({
      dialog: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Este nevoie de nume',
        v => (v && v.length <= 25) || 'Numele trebuie sa aiba mai putin de 25 de litere'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Este nevoie de e-mail',
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
      topic: null,
      items: [
        'Intrebari',
        'Sugestii',
        'Altele'
      ],
      message: '',
      messageRules: [
        v => !!v || 'Este nevoie de un mesaj'
      ],
      checkbox: false
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('../api/sendemail.php', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            topic: this.topic,
            message: this.message
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
      }
    }
  }
</script>

<style scoped>

</style>
