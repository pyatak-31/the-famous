<template>
    <section class="catalog">
        <app-container class="catalog__container">
            <ui-title rank="1">
                Картины эпохи Возрождения
            </ui-title>
            
            <module-catalog-list class="catalog__list" />
        </app-container>
    </section>
</template>

<script>
    import AppContainer from '@/components/app/container/AppContainer.vue';
    import ModuleCatalogList from '@/components/module/catalog/ModuleCatalogList.vue';
    import UiTitle from '@/components/ui/title/UiTitle.vue';

    export default {
        name: 'CatalogView',
        components: {
            AppContainer,
            ModuleCatalogList,
            UiTitle,
        }          
    }
</script>

<style scoped lang="scss">
    .catalog {
        padding-top: 45px;
        padding-bottom: 45px;

        &__list {
            margin-top: 39px;
        }
    }

</style>
