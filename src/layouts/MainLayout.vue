<template>
    <layout-main-header />

    <div class="a">
        <router-view></router-view>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import LayoutMainHeader from '@/components/layout/main/header/LayoutMainHeader.vue'
    export default {
        name: 'MainLayout',
        components: {
            // LayoutMainHeader: defineAsyncComponent(() => import('@/components/layout/main/header/LayoutMainHeader.vue'))
                LayoutMainHeader,
        }   
    }
</script>

<script setup>

</script>

<style >
    
</style>