import axios from "axios";
axios.defaults.baseURL = "http://124.93.196.45:10001";
//配置全局的请求头   拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    if (window.localStorage.getItem("token")) {
        config.headers.common["Authorization"] = window.localStorage.getItem("token")
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios;