export default {
    namespaced: true,
    state: {
        name: '',
        img: null,
        price: 0,
        total: 0,
        count: 0,
    },
    
    getters: {
        getCount(state) {
            return state.count
        }
    },

    mutations: {
        increment(state) {
            state.count ++;
            console.log('increment clicked');
        },
        decrement(state) {
            state.count --;
        },
        
    }
}