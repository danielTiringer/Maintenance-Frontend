<template>
  <v-app class="grey lighten=4">
		<Navbar />
    <v-content class="ma-4">
			<router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
