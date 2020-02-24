import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueFriendlyIframe);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");