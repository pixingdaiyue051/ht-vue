import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex 在vm 和 vc上都由$store
Vue.use(Vuex)

import {nanoid} from 'nanoid';

// 接收所有dispatch请求 加入判断或增强相关的业务逻辑
const actions = {
    incrOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('INCR', value);
        }
    },
    incrAwait(context, value) {
        setTimeout(() => context.commit('INCR', value), 1000);
    },
}
// 接收actions commit的请求 操作数据
const mutations = {
    INCR(state, value) {
        state.sum += value;
    },
    DECR(state, value) {
        state.sum -= value;
    },
    ADD_ITEM(state) {
        state.arrPoint.push(nanoid());
    },
}
// store管理的数据
// 由于store会被注册到所有组件上 所有state数据是共享的
const state = {
    sum: 0,
    strPoint: 'hello',
    objPoint: { id: '312' },
    arrPoint: ['vgffj'],
}
// 类似computed
const getters = {
    bigSum(state) {
        return state.sum * 10;
    },
    largePoint(state) {
        return state.strPoint + ' vuex';
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
