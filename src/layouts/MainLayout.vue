<template>
    <div class="main-layout">
        <layout-main-header />
    
        <main class="main-layout__main">
            <router-view></router-view>
        </main>
    
        <layout-main-footer />
    </div>
</template>

<script>
    import LayoutMainHeader from '@/components/layout/main/header/LayoutMainHeader.vue'
    import LayoutMainFooter from '@/components/layout/main/footer/LayoutMainFooter.vue'
    
    export default {
        name: 'MainLayout',
        components: {
            LayoutMainHeader,
            LayoutMainFooter,
        }   
    }
</script>

<style lang="scss">
    .main-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        &__main {
            flex: 1;
        }
    }
</style>