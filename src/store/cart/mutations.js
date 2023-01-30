export default ({
    addToCart(state, goodsId) {
        state.cart.push(goodsId);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
});