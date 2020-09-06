import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#500000",
        secondary: "#f6f6f6",
        accent: "#998542",
        error: "#3C0000",
        success: "#5B6236"
      }
    }
  }
});
