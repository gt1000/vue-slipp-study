import { createStore } from "vuex";

export default createStore({
    state: {
        userId: '',
    },
    getters: {
        // time2(state) {
        //     return state.counter * 2;
        // }
    },
    // state 값 변경
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        clearUserId(state) {
            state.userId = '';
        }
    }
});