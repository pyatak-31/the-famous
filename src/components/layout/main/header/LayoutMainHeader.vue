<template>
    <header class="main-header">
        <app-container class="main-header__container">
            <ui-logo />

            <layout-main-nav
                class="main-header__nav"
                hightlight-active-link
            />

            <module-catalog-search class="main-header__search" />
            
        </app-container>
    </header>
</template>

<script>
    import UiLogo from '@/components/ui/logo/UiLogo.vue';
    import LayoutMainNav from '@/components/layout/main/nav/LayoutMainNav.vue';
    import AppContainer from '@/components/app/container/AppContainer.vue';
    import { ref } from 'vue';
    import ModuleCatalogSearch from '@/components/module/catalog/ModuleCatalogSearch.vue';

    export default {
        name: 'LayoutMainHeader',
        components: {
            UiLogo,
            LayoutMainNav,
            AppContainer,
            ModuleCatalogSearch,
        }          
    }
</script>

<script setup>
    const val = ref()
</script>

<style lang="scss" scoped>
    .main-header {
        padding-top: 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid $grey-2;
        
        &__container {
            display: flex;
            align-items: center;
        }

        &__nav {
            margin-right: 30px;
            margin-left: 48px;
        }

        &__search {
            width: 415px;
            margin-left: auto;
        }
    }
</style>