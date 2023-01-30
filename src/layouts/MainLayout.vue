<template>
    <nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>

    <div class="a">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style >
    .a {
        min-height: 100vh;
        background-color: rgb(128, 95, 95);
    }
</style>