<template>
    <section class="catalog">
        <app-container class="catalog__container">
            <ui-title rank="1">
                Картины эпохи Возрождения
            </ui-title>
            
        </app-container>
    </section>
</template>

<script>
    import AppContainer from '@/components/app/container/AppContainer.vue';
    import { ref } from 'vue';
import UiTitle from '@/components/ui/title/UiTitle.vue';

    export default {
        name: 'CatalogView',
        components: {
            AppContainer,
                UiTitle,
        }          
    }
</script>

<style scoped lang="scss">
    button {
        background-color: $primary;
    }

</style>
