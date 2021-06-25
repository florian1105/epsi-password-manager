import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
import { router } from './router.js'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
