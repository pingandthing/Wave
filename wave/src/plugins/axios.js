import Vue from 'vue'
import axios from 'axios'


axios.defaults.baseURL = 'http://65d6f0cc736b.ngrok.io'
axios.defaults.headers.common['Accept-Language'] =
  JSON.parse(localStorage.getItem('locale')) || 'en'


// eslint-disable-next-line no-shadow
Plugin.install = (Vue) => {
  Vue.axios = axios
  window.axios = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios
      }
    },
    $axios: {
      get() {
        return axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
