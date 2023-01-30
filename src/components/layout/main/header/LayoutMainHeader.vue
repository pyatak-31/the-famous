<template>
    <header class="main-header">
        <app-container class="main-header__container">
            <ui-logo />

            <layout-main-nav
                class="main-header__nav"
                hightlight-active-link
            />

            <ui-search />
            
        </app-container>
    </header>
</template>

<script>
    import UiLogo from '@/components/ui/logo/UiLogo.vue';
    import LayoutMainNav from '@/components/layout/main/nav/LayoutMainNav.vue';
    import AppContainer from '@/components/app/container/AppContainer.vue';
    import { ref } from 'vue';
    import UiSearch from '@/components/ui/search/UiSearch.vue';

    export default {
        name: 'LayoutMainHeader',
        components: {
            UiLogo,
            LayoutMainNav,
            AppContainer,
            UiSearch,
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
            margin-left: 48px;
        }
    }
</style>