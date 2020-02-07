import Vue from 'vue'
import axios from 'axios'
import vuetify, { i18n } from './plugins/vuetify'

import App from './App'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  vuetify,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
