import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const orderStore = {
  debug: true,
  state: {
    order: {id: 123, eta: "15 min", products: [{ name: "coke"}]}
  }
}

var vm = new Vue({
  router,
  render: h => h(App),
  data: orderStore.state
})

vm.$mount('#app')
