import http from "../model/http";
import api from "../model/api";

export default {
    namespaced: true,
    state: {
        list: [],
    },
    mutations: {
        initList(state, payload) {
            //初始化列表  同步方法  payload是集合
            state.list = payload;
        },
    },
    actions: {
        async initList({ commit }, payload) {
            //执行异步
            let { data } = await http.get(api.user.info, payload);
            commit("initList", data);
            console.log(data);
        },


    }
}