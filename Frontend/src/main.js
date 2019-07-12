import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const orderStore = {
  debug: true,
  state: {
    order: {}
  }
}
console.log(process.env)
var vm = new Vue({
  router,
  render: h => h(App),
  data: { order: orderStore.state }
})

vm.$mount('#app')
