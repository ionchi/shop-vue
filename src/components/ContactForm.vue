<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="25"
            :label="$t('contactForm.name') + '*'"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="$t('contactForm.email') + '*'"
            required
          ></v-text-field>
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            :label="$t('contactForm.phone')"
          ></v-text-field>
          <v-select
            v-model="topic"
            :items="items"
            :label="$t('contactForm.topic.header')"
          ></v-select>
          <v-textarea
            v-model="message"
            :rules="[v => !!v || $t('contactForm.messageRule')]"
            :label="$t('contactForm.message') + '*'"
            :hint="$t('contactForm.messageHint')"
            required
          ></v-textarea>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || $t('contactForm.privacyRule')]"
            required
          >
            <span slot="label">
              {{$t('contactForm.privacy')}}
              <b-button variant="link" size="lg" @click="privacyDialog=true" class="termsBtn">
                {{$t('contactForm.privacyLink')}}
              </b-button>
            </span>
          </v-checkbox>

          <v-btn
            color="info"
            class="drycoBtn"
            :loading="loading"
            :disabled="!valid"
            @click="submit"
          >
            {{$t('contactForm.sendBtn')}}
          </v-btn>
          <v-btn @click="clear">{{$t('contactForm.clearBtn')}}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">{{$t('contactForm.dialog.headline')}}</v-card-title>

        <v-card-text>
          {{$t('contactForm.dialog.text')}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            {{$t('contactForm.dialog.closeBtn')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="privacyDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{$t('privacy.dialogHeader')}}
        </v-card-title>

        <v-card-text>
          <TermsConditions/>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="drycoBtn"
            flat
            @click="privacyDialog = false"
          >
            {{$t('privacy.dialogAcceptBtn')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import TermsConditions from '../components/TermsConditions'

  export default {
    name: 'ContactForm',
    components: {
      TermsConditions
    },
    data: () => ({
      loader: null,
      loading: false,
      dialog: false,
      valid: true,
      name: '',
      email: '',
      phone: '',
      topic: null,
      message: '',
      checkbox: false,
      privacyDialog: false
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.loader='loading';
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
      },
      changeLocaleUrl(newLocale) {
        if (newLocale!==undefined)
          this.$i18n.locale = newLocale;
        window.history.pushState("", "", '/'+this.$i18n.locale + this.$route.path);
      }
    },
    watch: {
      loader () {
        const l = this.loader;
        this[l] = !this[l];

        setTimeout(() => (this[l] = false), 3000);

        this.loader = null;
      }
    },
    computed: {
      nameRules: function () {
        return [
          v => !!v || this.$tc('contactForm.nameRule1'),
          v => (v && v.length <= 25) || this.$tc('contactForm.nameRule2')
        ];
      },
      emailRules: function () {
        return [
          v => !!v || this.$tc('contactForm.emailRule1'),
          v => /.+@.+/.test(v) || this.$tc('contactForm.emailRule2')
        ];
      },
      phoneRules: function () {
        return [
          value => {
            const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im; // (123)456-7890, 1234567890, +31636363634...
            if (value) var digits = value.replace(/\s/g, '');
            return phonePattern.test(digits) || value==='' || value === undefined || this.$tc('contactForm.phoneRule');
          }
        ];
      },
      items: function () {
        return [
          this.$tc('contactForm.topic.item1'),
          this.$tc('contactForm.topic.item2'),
          this.$tc('contactForm.topic.item3')
        ];
      }
    }
  }
</script>

<style scoped>
  .termsBtn {
    padding: 0px;
  }

  .drycoBtn {
    background-color: #30BCD5 !important;
  }
</style>
