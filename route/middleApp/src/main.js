import Vue from 'vue'
import App from './App.vue'
import 'current-script-polyfill'

Vue.config.productionTip = false

import './assets/modules'
import router from './router'

window.appData = {
  router
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
