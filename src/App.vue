<template>
  <div id="app">
    <nav id="nav" v-show="this.$store.state.flag">
      <router-link to="/" exact>
        <span class="icon iconfont icon-shouye"></span> 首页
      </router-link>
      <router-link to="/service">
        <span class="icon iconfont icon-fuwu"></span>全部服务
      </router-link>
      <!-- <router-link to="/party">
      <span class="icon iconfont icon-dangjian_shushuodangjian"></span>智慧党建
      </router-link> -->
      <router-link to="/news">
        <span class="icon iconfont icon-xinwen"></span>新闻
      </router-link>
      <router-link to="/mine">
        <span class="icon iconfont icon-geren"></span>个人中心
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#nav {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: white;
  z-index: 9999;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  flex: 1;
  align-content: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #ff5f16;
}
</style>
