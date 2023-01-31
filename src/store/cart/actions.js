export default ({
    async addToCart({ commit }, id) {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!res.ok) { throw new Error('Ошибка') }
            const data = await res.json();
            commit('addToCart', id);
            return data.title;
        } catch (error) {
            return  error.message;
        }
    },

    async removeFromCart({ commit }, id) {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!res.ok) { throw new Error('Ошибка') }
            const data = await res.json();
            commit('removeFromCart', id);
            return data.title;
        } catch (error) {
            return  error.message;
        }
    }
});
