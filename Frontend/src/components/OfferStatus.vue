<template>
  <div class="hello">
    <h1>Order Status for Order #{{ $root.order.orderId }}</h1>
    <h2>Hello, your order will arrive by {{ $root.order.eta | formatDate }} </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (value: String) {
  if (value) {
    return moment(String(value)).format('hh:mm a MM/DD/YYYY')
  }
})

export default {
  name: 'OfferStatus',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
