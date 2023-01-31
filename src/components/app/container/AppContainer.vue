<template>
    <div class="container">
        <slot />
    </div>
</template>

<script>export default { name: 'AppContainer' };</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        max-width: $container-width;
        margin: 0 auto; 
        padding-right: 15px;
        padding-left: 15px;
    }
</style>