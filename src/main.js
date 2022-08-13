import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//vant
// import 'vant/lib/index.css';
// import Vant from 'vant';
import { Toast } from "vant";
//axios
import axios from "axios";
//
import 'amfe-flexible'
//http
import http from "./model/http";
import api from "./model/api";
//icon
import "./css/iconfont.css";
// Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$http = http;
Vue.prototype.$api = api;
Vue.prototype.$toast = Toast;
Vue.filter("filterImg", (img) => {
  return "http://124.93.196.45:10001" + img;
})
// Vue.prototype.$http = axios;

// axios.defaults.baseURL='http://124.93.196.45:10001/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
