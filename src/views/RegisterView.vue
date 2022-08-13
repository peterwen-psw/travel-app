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
            pattern: /^[0-9a-z_$]{6,10}$/i,
            message: '请输入数字字母组成长度6到10位',
            trigger: 'onChange',
          },
        ]"
      />
      <van-field
        v-model="password2"
        type="password"
        name="userpwd2"
        label="确认密码"
        placeholder="重复密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern: /^[0-9a-z_$]{6,10}$/i,
            message: '请输入数字字母组成长度6到10位',
            trigger: 'onChange',
          },
        ]"
      />
      <van-field
        v-model="phonenumber"
        name="phonenumber"
        label="手机号"
        placeholder="请输入常用的手机号"
        :rules="[
          { required: true, message: '请填写手机号' },
          {
            pattern: /^1[3-9][0-9]{9}$/i,
            message: '请输入常用的手机号',
            trigger: 'onChange',
          },
        ]"
      />
      <van-field name="sex" label="性别">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="0">男</van-radio>
            <van-radio name="1">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="请输入您的昵称"
        :rules="[
          { required: true, message: '请填写昵称' },
          {
            pattern: /^[\u4E00-\u9FA5]{2,4}$/,
            message: '请输入昵称',
            trigger: 'onChange',
          },
        ]"
      /><van-field
        v-model="email"
        name="email"
        label="邮箱"
        placeholder="请输入常用的邮箱"
        :rules="[
          { required: true, message: '请填写邮箱' },
          {
            pattern:
              /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: '请输入常用的邮箱',
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
      password2: "",
      phonenumber: "",
      sex: "0",
      nickName: "",
      email: "",
    };
  },
  methods: {
    async onSubmit(info) {
      if (info.userpwd != info.userpwd2) {
        this.$toast.fail("两次输入的密码不一致");
      } else {
        let { data } = await this.$http.post(this.$api.user.register, {
          userName: info.username,
          password: info.userpwd,
          phonenumber: info.phonenumber,
          sex: info.sex,
          email: info.email,
          nickName: info.nickName,
        });
        // console.log(data);
        if (data.code == 200) {
          //新增成功 成功以后去登录页面
          this.$emit("change", 0);
          this.$router.push("/mine/login");
        } else {
          this.$toast.fail(data.msg);
        }
      }
    },
   
  },
};
</script>

<style>
</style>