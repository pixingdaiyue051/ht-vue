import { nanoid } from 'nanoid';
import axios from 'axios';

export default {
    namespaced: true,
    actions: {
        addRandomItem(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
                .then(res => context.commit('ADD_RANDOM_ITEM', res.data))
                .catch(err => console.log(err.message))
                .then(() => console.log('at last'))
        }
    },
    mutations: {
        ADD_ITEM(state) {
            state.arrPoint.push(nanoid());
        },
        ADD_RANDOM_ITEM(state,value) {
            state.arrPoint.push(value);
        },
    },
    state: {
        arrPoint: ['vgffj'],
    },
    getters: {

    }
}