<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
    <OfferStatus />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OfferStatus from '@/components/OfferStatus.vue' // @ is an alias to /src

@Component({
  components: {
    OfferStatus
  }
})
export default class Home extends Vue {}
</script>
