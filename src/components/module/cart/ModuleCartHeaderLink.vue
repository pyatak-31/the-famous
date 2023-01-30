<template>
    <router-link
        class="cart-button"
        to="/cart"
    >
        <i class="cart-button__icon">
            <ui-icon name="cart" />
        </i>

        <span class="cart-button__counter">
            {{ cartCount }}
        </span>
    </router-link>
</template>

<script>
    import UiIcon from '@/components/ui/icon/UiIcon.vue'
    
    export default {
        name: 'ModuleCartHeaderLink',
        components: { UiIcon  },
    }
</script>

<script setup>
    import { useCart } from '@/composables/useCart';

    const { cartCount } = useCart();
</script>

<style lang="scss" scoped>
    .cart-button {
        position: relative;
        display: inline-block;
        padding-right: 15px;
        
        &__icon {
            display: inline-block;
            width: 28px;
            height: 28px;
        }

        &__counter {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 15px;
            height: 15px;
            @include font($white, 12px, 15px, 500, 'Inter');
            background-color: $dark;
            border-radius: 50%;
        }
    }
</style>