import { computed, ref } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
    const store = useStore();

    const isLoading = ref(false);
    const cartCount = computed(() => store.getters['cart/cartCount']);
    const isInCart = computed((id) => store.getters['cart/isInCart']);

    const addToCart = async (id) => {
        isLoading.value = true;
        const answer = await store.dispatch('cart/addToCart', id);
        isLoading.value = false;
        alert(answer);
    };

    const removeFromCart = async (id) => {
        isLoading.value = true;
        const answer = await store.dispatch('cart/removeFromCart', id);
        isLoading.value = false;
        alert(answer);
    };

    return { isLoading, cartCount, isInCart, addToCart, removeFromCart };
};
