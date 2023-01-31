<template>
    <div class="logo">
        <img
            :src="require(`@/assets/images/${ dark ? 'logo-dark' : 'logo' }.jpg`)"
            alt="Картина"
        >
    </div>
</template>

<script>export default { name: 'UiLogo' };</script>

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