import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const orderStore = {
  debug: true,
  state: {
    order: {}
  },
  setOrderAction (newValue) {
    if (this.debug) console.log('setOrderAction triggered with', newValue)
    this.state.order = newValue
  },
  fetch (operation) {
    return window.fetch(process.env.VUE_APP_API_BASE_URL + '/api/' + operation)
  }
}
console.log(process.env)
var vm = new Vue({
  router,
  render: h => h(App),
  data: { order: orderStore.state }
})

vm.$mount('#app')

orderStore.fetch('orderstatus').then(function (response) {
  return response.json()
}).then(function (result) {
  orderStore.setOrderAction(result)
})
