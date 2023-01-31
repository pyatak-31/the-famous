<template>
    <ul class="catalog-list">
        <TransitionGroup name="list" mode="out-in">
            <module-catalog-card
                v-for="{ id, name, author, price, old_price, image, saled_status } in catalogList"
                :key="id"
                :id="id"
                :name="name"
                :author="author"
                :price="price"
                :old_price="old_price"
                :image="image"
                :saled_status="saled_status"
            />
        </TransitionGroup>
    </ul>
</template>

<script>
    import { useCatalog } from '@/composables/useCatalog';
    import ModuleCatalogCard from './ModuleCatalogCard.vue';

    export default {
        name: 'ModuleCatalogList',
        components: {
            ModuleCatalogCard,            
        }          
    }
</script>

<script setup>
    const { catalogList } = useCatalog();
</script>

<style lang="scss" scoped>
    .catalog-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, 280px);
        gap: 31px;
    }

    .list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
    }

    .list-leave-active {
        position: absolute;
    }
</style>