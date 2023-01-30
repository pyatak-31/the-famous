<template>
    <ui-search @to-search="log" />
</template>

<script>
    import UiSearch from '@/components/ui/search/UiSearch.vue';
    export default {
        name: 'ModuleCatalogSearch',
        components: { UiSearch },
    }
</script>

<script setup>
    const log = (v) => {
        console.log(v);
    }
</script>

<style lang="scss" scoped>

</style>