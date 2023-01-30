<template>
    <div class="search-panel">
        <ui-input v-model="searchValue" />
        <ui-button>132</ui-button>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import UiInput from '../input/UiInput.vue'
    import UiButton from '../button/UiButton.vue';
    
    export default {
        name: 'UiSearch',
        components: { UiInput, UiButton },
    }
</script>

<script setup>
    const searchValue = '';
</script>

<style lang="scss" scoped>

</style>