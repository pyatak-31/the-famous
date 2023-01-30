<template>
    <ul class="contacts">
        <li class="contacts__item">
            <a
                href="tel:+74959999999"
                class="contacts__text"
            >   
                <i class="contacts__icon">
                    <ui-icon name="phone" />
                </i>
                +7(495)999-99-99
            </a>
        </li>

        <li class="contacts__item">
            <p class="contacts__text">   
                <i class="contacts__icon">
                    <ui-icon name="address" />
                </i>
                г. Воронеж, ул. Никитина, 119А
            </p>
        </li>
    </ul>
</template>

<script>
    import UiIcon from '@/components/ui/icon/UiIcon.vue'
    
    export default {    
        name: 'ModuleContacts',
        components: {
            UiIcon,        
        }          
    }
</script>

<script setup>

</script>

<style lang="scss" scoped>
    .contacts {
        display: flex;
        gap: 40px;

        // &__item {}

        &__text {
            display: flex;
            align-items: center;
            @include font($grey-4, 14px, 21px, 400);
            white-space: nowrap;
        }

        &__icon {
            display: inline-block;
            min-width: 16px;
            width: 16px;
            min-height: 16px;
            height: 16px;
            margin-right: 8px;
        }
    }
</style>