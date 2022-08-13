<template>
  <div>
    <!-- <van-tabs v-model="active">
      <van-tab title="登录">
          <login></login>
      </van-tab>
      <van-tab title="注册">
          <register></register>
      </van-tab>
    </van-tabs> -->
    <div v-if="!isLogin">
      <van-tabs v-model="active">
        <van-tab>
          <template #title>
            <router-link to="/mine/login">登录</router-link>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <router-link to="/mine/register">注册</router-link>
          </template>
        </van-tab>
      </van-tabs>
      <router-view @change="change"></router-view>
    </div>
    <user-info
      v-else
      :userinfo="userInfo"
      @changeLogin="changeLogin"
    ></user-info>
  </div>
</template>

<script>
import userInfo from "./UserInfo.vue";
export default {
  components: {
    userInfo,
  },
  data() {
    return { active: 0, isLogin: false, userInfo: {} };
  },
  async created() {
    let token = window.localStorage.getItem("token");
    if (token) {
      this.isLogin = true;
      let { data } = await this.$http.get(
        this.$api.user.info,
        {},
        {
          // Authorization:
          //   "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjcyNmQ2YTM5LTI3NWUtNGRhYS04YmExLTJmOWVlNDBiYjBmZiJ9.E-XgLVyfzLOicywlu88_gfDM0-HzyU8SxBt0oFXwDad_QIu-o3-Rnop3X_YEDMkSMy8osYQhevZlO2BLdO02jw",
        }
      );
      this.userInfo = data.user;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    async initinfo() {
      this.isLogin = true;
      let { data } = await this.$http.get(
        this.$api.user.info,
        {},
        {
          // Authorization:
          //   "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjcyNmQ2YTM5LTI3NWUtNGRhYS04YmExLTJmOWVlNDBiYjBmZiJ9.E-XgLVyfzLOicywlu88_gfDM0-HzyU8SxBt0oFXwDad_QIu-o3-Rnop3X_YEDMkSMy8osYQhevZlO2BLdO02jw",
        }
      );
      this.userInfo = data.user;
    },
    change(index) {
      this.active = index;
    },
    changeLogin(flag) {
      this.isLogin = flag;
    },
  },
  mounted() {
    let path = this.$route.path;
    if (path.indexOf("register") == -1) {
      this.change(0);
    } else {
      this.change(1);
    }
  },
};
</script>

<style></style>;
