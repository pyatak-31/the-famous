export default ({
    addToCart(state, goodsId) {
        state.cart.push(goodsId);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart(state, goodsId) {
        state.cart = state.cart.filter((goods) => goods !== goodsId);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
});