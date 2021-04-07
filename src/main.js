import Vue from 'vue'
import App from './App.vue'

import { firestorePlugin } from 'vuefire'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

Vue.use(firestorePlugin)

Vue.config.productionTip = false

import Home from './components/Home'

const router = new VueRouter({
  routes: [{ path: '/', component: Home}],
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
