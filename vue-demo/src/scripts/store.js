import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex 在vm 和 vc上都由$store
Vue.use(Vuex)

import service from './service.js';
import user from './user.js';

export default new Vuex.Store({
    modules: {
        service,
        user
    }
})