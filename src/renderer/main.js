import Vue from 'vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'

import App from './App'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faSave, faFolderOpen, faPlus, faGlobeAfrica, faCog, faEdit, faEye, faCaretRight, faDesktop, faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFile, faSave, faFolderOpen, faPlus, faGlobeAfrica, faCog, faEdit, faEye, faCaretRight, faDesktop, faTable)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  vuetify,
  store,
  template: '<App/>'
}).$mount('#app')
