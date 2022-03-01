export default {
    namespaced: true, // 指定命名空间 页面上引入是需要使用该命名空间作为前缀才能使用
    actions: {
        incrOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('INCR', value);
            }
        },
        incrAwait(context, value) {
            setTimeout(() => context.commit('INCR', value), 1000);
        },
    },
    mutations: {
        INCR(state, value) {
            state.sum += value;
        },
        DECR(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        strPoint: 'hello',
        objPoint: { id: '312' },
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        },
        largePoint(state) {
            return state.strPoint + ' vuex';
        }
    }
}