<template>
    <div class="search-panel">
        <input
            type="text"
            class="search-panel__field"
            v-bind="$attrs"
            v-model="searchValue"
            @keypress.enter="toSearch"
        >

        <ui-button @on-click="toSearch">
            Найти
        </ui-button>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import UiButton from '../button/UiButton.vue';
    import UiIcon from '../icon/UiIcon.vue';
    
    export default {
        name: 'UiSearch',
        components: { UiButton, UiIcon },
    }
</script>

<script setup>
    const emit = defineEmits(['toSearch']);

    const searchValue = ref();

    const toSearch = () => {
        emit('toSearch', searchValue.value)
    };
</script>

<style lang="scss" scoped>
    .search-panel {
        display: flex;

        &__field {
            flex: 1 0 200px;
            width: 100%;
            padding: 13px 16px;
            @include font($dark, 14px, 20px, 400);
            border-top: 1px solid $grey-2;
            border-bottom: 1px solid $grey-2;
            border-left: 1px solid $grey-2;
            transition: border-color .3s;

            &::placeholder {
                color: $grey-1;
            }

            &:focus {
                border-color: $grey-3;
            }
        }
    }
</style>