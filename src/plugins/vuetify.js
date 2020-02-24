import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#7BD01E',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
                accent: '#7c62e3;'
            },
        },
    },
});