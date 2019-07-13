import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Order from './types/order.model'
import User from './types/user.model'
import Address from './types/address.model'
import Product from './types/product.model'

Vue.config.productionTip = false

let mockAddress = new Address(
  '123 Main St.',
  '13',
  'Anytown',
  'PA',
  19191
)
let user = new User(1, 'John Smith', 'john.smith@realemail.com', mockAddress, mockAddress)
let product1 = new Product(1, 'Coke', 1, 2.29, 'Soda', {
  'small': 'smallimageCoke.png',
  'thumb': 'thumbCoke.png'
})
let product2 = new Product(1, 'Lay\'s Chips', 1, 1.29, 'Chips', {
  'small': 'smallimageLays.png',
  'thumb': 'thumbLays.png'
})
let product3 = new Product(1, 'Red Bull', 1, 6.29, 'Energy', {
  'small': 'smallimageRB.png',
  'thumb': 'thumbRB.png'
})
let productArray = [ product1, product2, product3 ]
let etaMin = new Date().getTime() + 20 * 60 * 1000
let etaMax = new Date().getTime() + 40 * 60 * 1000
let order = new Order(1, 6, user, productArray, new Date(etaMin), 'Ordered', { 'from': new Date(etaMin), 'to': new Date(etaMax) })

const orderStore = {
  debug: true,
  state: {
    order: order
  }
}

var vm = new Vue({
  router,
  render: h => h(App),
  data: orderStore.state
})

vm.$mount('#app')
