<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          {
            pattern: /^[a-z_$][0-9a-z_$]{3,9}$/i,
            message: '请输入数字字母_$组成不能以数字开头长度4到10位',
            trigger: 'onChange',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="userpwd"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern: /^[0-9a-z_$]{5,9}$/i,
            message: '请输入数字字母长度6到10位',
            trigger: 'onChange',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(info) {
      let { data } = await this.$http.post(this.$api.user.login, {
        username: info.username,
        password: info.userpwd,
      });
      // console.log(data);
      if (data.code == 200) {
        let token = data.token;
        window.localStorage.setItem("token", token);
        let backPath = window.localStorage.getItem("backPath");
        if (backPath) {
          this.$router.push(backPath);
        } else {
          this.$router.push("/");
        }
      } else {
        this.$toast.fail(data.msg);
      }
    },
  },
};
</script>

<style>
</style>