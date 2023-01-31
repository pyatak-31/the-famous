<template>
    <span
        class="price"
        :class="{ 'price--old': old }"   
    >
        {{ (value).toLocaleString('ru') }} {{ currency }}
    </span>
</template>

<script>export default { name: 'UiPrice' };</script>

<script setup>
    const props = defineProps({
        value: Number,
        currency: { type: String, default: '$' },
        old: Boolean,
    });
</script>

<style lang="scss" scoped>
    .price {
        @include font($dark, 16px, 24px, 700);

        &--old {
            @include font($grey-6, 14px, 21px, 300);
            text-decoration: line-through;
        }
    }
</style>