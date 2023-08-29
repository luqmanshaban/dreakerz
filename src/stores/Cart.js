export default {
    namespaced: true,
    state: {
        cart: {
            color: '',
            size: null,
            quantity: null,
            total: null,
            cartItems: []
        }
    },
    mutations: {
        updateCart(state, payload) {
            state.cart.color = payload.color;
            state.cart.size = payload.size;
            state.cart.quantity = payload.quantity;
            state.cart.total = payload.total;
        },
        addToCart(state, payload) {
            state.cart.cartItems.push(payload);
            console.log(state.cart.cartItems);
        }
    }
}
