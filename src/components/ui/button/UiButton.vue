<template>
    <button
        :type="type"
        :class="classList"
        :disabled="disabled"
        @click="onClick"   
    >
        <i
            v-if="loading"
            class="button__loader"
        ></i>

        <template v-else>
            <i
                :class="iconClass"
                v-if="hasLeftIcon"    
            >
                <slot name="left-icon"></slot>
            </i>
    
            <slot />
    
            <i
                :class="iconClass"
                v-if="hasRightIcon"    
            >
                <slot name="right-icon"></slot>
            </i>
        </template>
    </button>
</template>

<script>export default { name: 'UiButton' };</script>

<script setup>
    import { useSlots, computed } from 'vue';

    const props = defineProps({
        type: { type: String, default: 'button' },
        disabled: Boolean,
        loading: Boolean,
    });
    
    const emit = defineEmits(['onClick']);

    const slot = useSlots();
    const hasRightIcon = computed(() => Boolean(slot['right-icon']));
    const hasLeftIcon = computed(() => Boolean(slot['left-icon']));
    const hasText = computed(() => Boolean(slot['default']));

    const classList = computed(() => {
        let result = `button`;
        if (props.disabled) {
            result += ' button--disabled';
        }
        return result;
    });

    const iconClass = computed(() => {
        let result = `button__icon`;
        if (!hasText.value) {
            result += ' button__icon--only';
        } else if (hasText.value && hasRightIcon.value) {
            result += ' button__icon--right';
        } else if (hasText.value && hasLeftIcon.value) {
            result += ' button__icon--left';
        }
        return result;
    });

    const onClick = () => {
        emit('onClick');
    };
</script>

<style scoped lang="scss">
    .button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px 28px;
        @include font($white, 14px, 21px, 700);
        white-space: nowrap;
        background-color: $primary;
        transition: background-color .3s;

        &:hover,
        &:focus {
            background-color: $primary-hover;
        }

        &--disabled {
            pointer-events: none;
            opacity: .3;
        }

        &__icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            
            &--right {
                margin-left: 4px;
            }
            
            &--left {
                margin-right: 4px;
            }
        }

        &__loader {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 4px solid $white;
            border-bottom-color: transparent;
            border-radius: 50%;
            animation: rotation 1s linear infinite;
        }
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>