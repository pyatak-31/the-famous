<template>
    <div class="logo">
        <img
            src="@/assets/images/logo-dark.jpg"
            alt="Логотип"
            v-if="dark"
        >
        
        <img
            src="@/assets/images/logo.jpg"
            alt="Логотип"
            v-else
        >
    </div>
</template>

<script>export default { name: 'LayoutMainHeader' };</script>

<script setup>
    const props = defineProps({ dark: { type: Boolean, default: false }});
</script>

<style lang="scss" scoped>
    .logo {
        min-width: 48px;
        width: 48px;
        min-height: 48px;
        height: 48px;
    }
</style>