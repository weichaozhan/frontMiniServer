import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

window.appData = {
  router
}

require('./moduleApp/index')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
