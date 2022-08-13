// import Vue from 'vue'
import Vuex from 'vuex'
import userinfo from "./userinfo"
// Vue.use(Vuex)

export default new Vuex.Store({
  state: {//状态   数据 data
      flag:true,//表示底部导航显示的状态
  },

  mutations: {//方法  同步方法 methods  在页面 只能被commit调用
    changeFlag(state,flag){
      state.flag = flag;

    },

  },
  actions: {//方法   异步方法  异步方法只能调用同步方法
  },
  modules: {//模块  子组件
  userinfo,
  },
  getters: {//计算属性   computed
  },
})
