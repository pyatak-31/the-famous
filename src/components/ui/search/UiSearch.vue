<template>
    <div class="search-panel">
        <ui-input
            class="search-panel__field"
            v-model="searchValue"
        />
        
        <ui-button>
            <!-- <template #left-icon>
                <ui-icon name="cart" />
            </template> -->
            Найти
        </ui-button>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import UiInput from '../input/UiInput.vue'
    import UiButton from '../button/UiButton.vue';
    import UiIcon from '../icon/UiIcon.vue';
    
    export default {
        name: 'UiSearch',
        components: { UiInput, UiButton, UiIcon },
    }
</script>

<script setup>
    const searchValue = '';
</script>

<style lang="scss" scoped>
    .search-panel {
        display: flex;
        width: 415px;

        &__field {
            flex: 1 0 200px;
        }
    }
</style>