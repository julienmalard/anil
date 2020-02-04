import Vue from 'vue'
import Vuetify from '@/plugins/vuetify'
import axios from 'axios'

import App from './பயன்பாடு'
// import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faSave, faFolderOpen, faPlus, faGlobeAfrica, faCog, faEdit, faEye, faCaretRight, faDesktop, faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFile, faSave, faFolderOpen, faPlus, faGlobeAfrica, faCog, faEdit, faEye, faCaretRight, faDesktop, faTable)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  components: { App },
  // router,
  store,
  template: '<App/>'
}).$mount('#பயன்பாடு')
