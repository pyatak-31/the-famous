export default ({
    cartCount(state) {
        return state.cart.length;
    },

    isInCart: (state) => (id) => {
        return state.cart.some((goods) => goods === id);
    },
});
