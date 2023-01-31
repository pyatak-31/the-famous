<template>
    <nav class="main-nav">
        <ul class="main-nav__list">
            <li
                class="main-nav__item"
                v-for="{ name, to } in links"
                :key="to"    
            >
                <router-link
                    class="main-nav__link"
                    :class="[
                        { 'main-nav__link--active': hightlightActiveLink },
                        { 'main-nav__link--footer': footer },
                    ]"
                    :to="to"
                >{{ name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>export default { name: 'LayoutMainNav' };</script>

<script setup>
    const props = defineProps({
        hightlightActiveLink: Boolean,
        footer: Boolean
    });

    const links = [
        { name: 'Каталог', to: '/catalog' },
        { name: 'Доставка', to: '/delivery' },
        { name: 'Оплата', to: '/payment' },
        { name: 'Контакты', to: '/contacts' },
        { name: 'О галерее', to: '/about' },
    ];
</script>

<style scoped lang="scss">
    .main-nav {

        &__list {
            display: flex;
            gap: 48px;
        }

       // &__item {}

        &__link {
            @include font($dark, 14px, 21px, 400);
            white-space: nowrap;
            transition: color .3s;

            &:hover,
            &:focus {
                color: $grey-1;
            }

            &--active.active {
                color: $grey-1;
            }

            &--footer {
                color: $grey-4;
            }
        }
    }
</style>