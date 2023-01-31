<template>
    <renderTitle />
</template>

<script>export default { name: 'UiTitle' };</script>

<script setup>
    import { useSlots, h } from 'vue';

    const props = defineProps({
        rank: { type: String, default: '2' },
        hidden: Boolean,
    });
    
    const tag = `h${ props.rank }`;
    
    const classList = () => {
        let result = `title title--${ props.rank }`
        if (props.hidden) {
            result += ' visually-hidden';
        }
       
        return result
    };

    const slot = useSlots();
    const titleContent = slot.default ? slot.default() : 'Заголовок';

    const renderTitle = () => {
        return h(
            tag,
            {
                class: classList(),
            },
            titleContent
        );
    };
</script>

<style lang="scss">
    .title {
        color: $dark;

        &--1 {
            @include font('', 24px, 36px, 700);
        }

        &--2 {
            @include font('', 18px, 27px, 400);
        }

        &--3 {
            @include font('', 16px, 24px, 700);
        }

        &--4 {
            @include font('', 14px, 21px, 700);
        }

        &--5 {
            @include font('', 14px, 21px, 400);
        }

        &--6 {
            @include font('', 14px, 21px, 300);
        }
    }
</style>