export default {
    namespaced: true,
    state: {
        cart: {
            color: '',
            size: null,
            quantity: null,
            total: null
        }
    },
    mutations: {
        updateCart(state, payload) {
            state.cart.color = payload.color;
            state.cart.size = payload.size;
            state.cart.quantity = payload.quantity;
            state.cart.total = payload.total;
        }
    }
}
