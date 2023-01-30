<template>
    <footer class="main-footer">
        <app-container class="main-footer__container">
            <ui-logo dark />

            <layout-main-nav
                class="main-footer__nav"
                footer
            />

            <module-contacts class="main-footer__contacts" />
        </app-container>
    </footer>
</template>

<script>
    import UiLogo from '@/components/ui/logo/UiLogo.vue';
    import LayoutMainNav from '@/components/layout/main/nav/LayoutMainNav.vue';
    import AppContainer from '@/components/app/container/AppContainer.vue';
    import ModuleContacts from '@/components/module/contacts/ModuleContacts.vue';
    
    export default {    
        name: 'LayoutMainFooter',
        components: {
            UiLogo,
            LayoutMainNav,
            AppContainer,
            ModuleContacts,
        }          
    }
</script>

<style lang="scss" scoped>
    .main-footer {
        padding-top: 24px;
        padding-bottom: 24px;
        background-color: $grey-5;

        &__container {
            display: flex;
            align-items: center;
        }

        &__nav {
            margin-right: 30px;
            margin-left: 48px;
        }

        &__contacts {
            margin-left: auto;
        }
    }
</style>