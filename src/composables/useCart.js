import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
    const store = useStore();

    const cartCount = computed(() => store.getters['cart/cartCount']);

    const addToCart = (id) => {
        store.commit('cart/addToCart', id);
    };

    const removeFromCart = (id) => {
        store.commit('cart/removeFromCart', id);
    };

    return { cartCount, addToCart, removeFromCart };
};
