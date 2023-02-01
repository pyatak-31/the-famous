<template>
    <li
        class="catalog-card"
        :class="{ 'catalog-card--inactive': saled_status }"
    >
        <img
            :src="require(`@/assets/images/${ image }.jpg`)"
            alt="Картина"
        >

        <div class="catalog-card__body">
            <ui-title>
                «{{ name }}» <span class="catalog-card__author">{{ author }}</span>
            </ui-title>

            
            <span
                class="catalog-card__saled"
                v-if="saled_status"
            >
                {{ saled_status }}
            </span>
            
            <div
                class="catalog-card__pay-block"
                v-else
            >
                <div class="catalog-card__price-block">
                    <ui-price
                        v-if="old_price"
                        :value="old_price"
                        old
                    />
                    
                    <ui-price :value="price" />
                </div>

                <ui-button
                    class="catalog-card__in-cart-btn"
                    v-if="isInCart(id)"
                    :loading="isLoading"
                    @on-click="removeFromCart(id)"    
                >
                    <template #left-icon>
                        <ui-icon name="check" />
                    </template>
                    В корзине
                </ui-button>

                <ui-button
                    class="catalog-card__btn"
                    v-else
                    :loading="isLoading"
                    @on-click="addToCart(id)"
                >
                    Купить
                </ui-button>
            </div>
        </div>
    </li>
</template>

<script>
    import UiTitle from '@/components/ui/title/UiTitle.vue';
    import UiButton from '@/components/ui/button/UiButton.vue';
    import UiPrice from '@/components/ui/price/UiPrice.vue';
    import UiIcon from '@/components/ui/icon/UiIcon.vue';
    import { useCart } from '@/composables/useCart';

    export default {
        name: 'ModuleCatalogCard',
        components: {
            UiTitle,
            UiButton,
            UiPrice,
            UiIcon,
        }          
    }
</script>

<script setup>
    const props = defineProps({
        id: String,
        name: String,
        author: String,
        price: Number,
        old_price: Number,
        image: String,
        saled_status: String,
    });
    const { isLoading, isInCart, addToCart, removeFromCart } = useCart();
</script>

<style lang="scss" scoped>
    .catalog-card {
        border: 1px solid $grey-2;

        &--inactive {
            pointer-events: none;
            opacity: .5;
        }

        &__body {
            padding: 20px 24px 24px 24px;
        }

        &__author {
            display: block;
        }

        &__saled {
            display: inline-block;
            margin-top: 34px;
            @include font($dark, 16px, 24px, 700);
        }

        &__pay-block {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 22px;
        }

        &__price-block {
            display: flex;
            flex-direction: column;
        }

        &__old-price {
            @include font($grey-6, 14px, 21px, 300);
            text-decoration: line-through;
        }

        &__price {
            @include font($dark, 16px, 24px, 700);
        }

        &__in-cart-btn {
            min-width: 118px;
            min-height: 48px;
            max-height: 48px;
            padding: 14px 8px !important;
            background-color: #5b3a32 !important;
        }

        &__btn {
            min-width: 118px;
            min-height: 48px;
            max-height: 48px;

        }
    }
</style>