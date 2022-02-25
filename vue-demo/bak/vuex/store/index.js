import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex 在vm 和 vc上都由$store
Vue.use(Vuex)

import counter from './counter.js';
import datalist from './datalist.js';

export default new Vuex.Store({
    modules: {
        counter,
        datalist
    }
})
