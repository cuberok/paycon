<template>
  <div class="home">
    <div class="testbox">
      <form action="/">
        <v-text-field :label="'Сумма в гривнах'" v-model="amount"></v-text-field>
        <v-btn class="paybtn" @click.prevent="connect">
          <span class>Оплатить</span>
        </v-btn>
      </form>
    </div>

    <div v-if="iframesrc" class="embed-responsive embed-responsive-16by9 z-depth-1-half">
      <iframe class="ifWrapper" :src="iframesrc" allowfullscreen></iframe>
    </div>
  </div>
</template>
<script>
var CryptoJS = require("crypto-js");
const axios = require("axios").default;
axios.defaults.baseURL = "https://testgate.cityhub.com.ua/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  name: "Form",

  components: {},

  data: () => ({
    //
    amount: 1,
    iframesrc: null,
    paydata: {
      account_id: "509",
      amount: 0,
      amount_currency: "UAH",
      auth: {
        debug: true,
        point: "126_57",
        hash: ""
      },
      locale: "ru",
      service_id: 288,
      ref: {
        success_url: window.location.href + "transaction/succes",
        fail_url: window.location.href + "transaction/fail"
      }
    }
  }),
  computed: {},

  methods: {
    amountCoin() {
      return Number(this.amount) * 100 || 0;
    },
    getHH() {
      let hh = CryptoJS.MD5(this.paydata || "7009218176").toString();
      return hh;
    },
    async connect() {
      let hhash = this.getHH();
      this.paydata.amount = this.amountCoin();

      let ddata = this.paydata;
      ddata.auth.hash = hhash;
      axios({
        method: "post",
        url: "transaction/create",
        data: ddata
      }).then(r => {
        let data = r.data;
        if (data.response.result) {
          this.iframesrc = data.response.result.pay_url;
        }
      });
    }
  }
};
</script>


<style lang="scss" >
.main {
  border-top: none !important;
}

.ifWrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -17px;
  background: white;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

form {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 8px #7bd01e;
  text-align: center;
}
.paybtn {
  min-width: 120px !important;
  background: #7bd01e !important;
  color: #fff !important;
}
h2 {
  color: #7bd01e !important;
}
</style>

