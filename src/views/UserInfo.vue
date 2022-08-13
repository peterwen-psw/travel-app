<template>
  <div>
    <div class="user-container">
      <!-- 用户基本信息面板 -->
      <div class="user-card">
        <!-- 用户头像、姓名 -->
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #icon>
            <van-image
              round
              width="100px"
              height="100px"
              :src="userinfo.avatar"
            />
          </template>
          <template #title>
            <span class="username" >{{ userinfo.nickName }}</span>
          </template>
          <template #label>
            <van-tag color="#fff" text-color="#007bff" style="margin-left:15px;">个性签名</van-tag>
          </template>
        </van-cell>
      </div>
      <!-- 操作面板 -->
      <van-cell-group class="action-card">
        <van-cell icon="edit" title="编辑资料" is-link to="/user_edit" />
        <!-- <van-cell icon="chat-o" title="" is-link to="/" /> -->
        <van-cell title="手机号" :value="userinfo.phonenumber" />
        <van-cell title="用户ID" :value="userinfo.userId" />
        <van-cell title="账号" :value="userinfo.userName" />
        <van-cell title="邮箱" :value="userinfo.email" />
        <van-cell icon="warning-o" title="退出登录" is-link @click="exist" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: "",
    };
  },
  props: ["userinfo"],
  methods: {
    exist() {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("backPath");
      this.$emit("changeLogin", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  .user-card {
    background-color: #007bff;
    color: white;
    padding-top: 20px;
    .van-cell {
      background: #007bff;
      color: white;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
        margin-left: 15px;
      }
    }
  }
}
</style>