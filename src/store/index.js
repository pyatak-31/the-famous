import { createStore } from 'vuex'

import catalog from './catalog';
import cart from './cart';

export default createStore({
    modules: {
        catalog,
        cart,
    }
})
