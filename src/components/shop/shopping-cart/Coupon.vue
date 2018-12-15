<template>
    <div>
      <v-snackbar
        v-model="snackbar"
        :bottom="true"
        :left="true"
        :timeout="3000"
      >
        {{text}}
        <v-btn
          color="pink"
          flat
          @click="snackbar = false"
        >
          Inchide
        </v-btn>
      </v-snackbar>

      <ul id="coupon-input">
        <li>
          <div class="growing-search">
            <div class="input">
              <v-text-field v-model="form.coupon" type="text" name="search"
                            :disabled="couponApplied"
                            @input.native="forceUpper($event, form, 'coupon')"
                            placeholder="CUPON" class="textCoupon">
              </v-text-field>
            </div>
          </div>
        </li>

      </ul>

      <v-btn v-if="couponApplied" color="error"
             @click="removeCoupon">STERGE CUPONUL</v-btn>

      <v-btn v-else class="apply-coupon-btn" color="primary"
             @click="applyCoupon">APLICA CUPON</v-btn>
    </div>
</template>

<script>
  export default {
    name: 'Coupon',
    data() {
      return {
        snackbar: false,
        text: '',
        form: {
          coupon: ''
        },
        couponApplied: false
      };
    },
    methods: {
      applyCoupon() {
        if (this.form.coupon === "TEST") {
          this.text = 'SUCCES';
          this.couponApplied = true;
        }
        else
          this.text = 'FAIL';

        this.snackbar = true;
      },
      removeCoupon() {
        this.couponApplied = false;
        this.text = 'Cupon sters';
        this.snackbar = true;
      },
      forceUpper (e, obj, prop) {
        const start = e.target.selectionStart;
        e.target.value = e.target.value.toUpperCase();
        this.$set(obj, prop, e.target.value);
        e.target.setSelectionRange(start, start);
      }
    }
  };
</script>

<style scoped>
  ul#coupon-input > li { float: left; margin-right: 20px; margin-bottom: 20px; padding: 5px 10px; list-style-type: none;}
  ul#coupon-input > li:last-child { margin-right: 0; }
  ul#coupon-input > li > span { margin-bottom: 10px; }

  input:focus::-webkit-input-placeholder { color:transparent; }
  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */

  .growing-search {
    padding: 5px 5px 5px 7px;
    border-radius: 5px;
    background: #fff;
  }

  .growing-search div {
    display: inline-block;
    font-size: 14px;
  }

  .growing-search .input input {
    margin-right: 0;
    border: none;
    font-size: inherit;
    transition: width 200ms;
    padding-top: 5px;
    padding-left: 5px;
    padding-bottom: 5px;
    width: 150px;
    color: #000;
    border-bottom: 1px solid #959595;
  }

  .growing-search .submit button {
    margin-left: 0;
    border: none;
    font-size: 1.15em;
    color: #aaa;
    background-color: #fff;
    padding-top: 2px;
    padding-bottom: 2px;
    transition: color 200ms;
  }

  .growing-search .input input:hover, .growing-search .submit button:hover {
    cursor: pointer;
  }

  .growing-search .input input:focus, .growing-search .submit button:focus {
    outline: none;
  }

  .growing-search .submit button:hover {
    color: #3498db;
  }

  .apply-coupon-btn {
    background-color: #30BCD5 !important;
  }

  .textCoupon {
    margin-top: 0;
    margin-bottom: -15px;
  }

  @media only screen and (max-width: 1000px) and (min-width: 768px){
    .growing-search .input input {
      width: 100px;
    }
  }

  @media only screen and (max-width: 768px) {
    .growing-search .input input {
      width: 150px;
    }

    ul#coupon-input > li {
      padding-left: 0;
    }
  }
</style>
