<template>
	<component
		:is="layout"
		v-if="layout"
	/>
</template>

<script setup>
	import { computed, defineAsyncComponent } from 'vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const layout = computed(() => {
		if(route.meta.layout)
		return defineAsyncComponent(() => import(`./layouts/${ route.meta.layout }Layout.vue`));
	});
</script>
