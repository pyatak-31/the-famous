<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>

	<p class="text">HAO</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
	.text {
		font-family: Merriweather;
		font-weight: 700;
		// font-weight: 300;
	}
</style>
