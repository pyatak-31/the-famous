import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
    const store = useStore();

    const cartCount = computed(() => store.getters['cart/cartCount']);

    const addToCart = (id) => {
        store.commit('cart/addToCart', id);
    };

    return { cartCount, addToCart };
};
