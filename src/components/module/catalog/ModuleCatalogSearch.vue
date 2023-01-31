<template>
    <ui-search
        placeholder="Поиск по названию картины"
        @to-search="filterByName"
    />
</template>

<script>
    import UiSearch from '@/components/ui/search/UiSearch.vue';
    export default {
        name: 'ModuleCatalogSearch',
        components: { UiSearch },
    }
</script>

<script setup>
    import { useCatalog } from '@/composables/useCatalog';
    const { filterByName } = useCatalog();
</script>
