<template>
  <div class="user-edit-container">
    <!-- Header 区域 -->
    <van-nav-bar
      class="nav-bar"
      title="编辑资料"
      left-arrow
      @click-left="$router.back()"
      fixed
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="phonenumber"
        name="phonenumber"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="email"
        name="email"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field name="avatar" label="文件上传">
        <template #input>
          <van-uploader v-model="avatar" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>

    <!-- 用户资料
    <van-cell-group class="action-card">
      <van-cell title="头像" is-link center>
        <template #default>
          <van-image round class="avatar" src="" />
        </template>
      </van-cell>
      <van-cell title="昵称" is-link />
      <van-cell title="手机号" is-link />
      <van-cell title="邮箱" is-link />
            <van-uploader :after-read="afterRead" @click="afterRead" />
    </van-cell-group> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName:'',
      phonenumber:'',
      email:'',
      avatar: [{ url: "https://img01.yzcdn.cn/vant/leaf.jpg" }],
    };
  },
  // async created() {
  //   let { data } = await this.$http.put(
  //     this.$api.user.editinfo,
  //     {
  //       nickName: "",
  //     },
  //   );
  //   console.log(data);
  // },
  methods: {
    // async afterRead(info) {
    //   // 此时可以自行将文件上传至服务器
    //   let formData = new FormData();
    //   formData.append("file", info.file);
    //   let omg = await this.$http.post(this.$api.user.upload, formData);
    //   console.log(omg);
    //   this.omg = "http://124.93.196.45:10001/prod-api" + omg.fileName;
    // },
    async onSubmit(info){
      let formData = new window.FormData();
      formData.append("file",info.avatar[0].file);
      let myAvatar = await this.$http.post(this.$api.user.upload, formData);
          let { data } = await this.$http.put(
      this.$api.user.editinfo,{
        ...info,
        avatar:"http://124.93.196.45:10001/prod-api" + myAvatar.data.fileName
      }
    );
    console.log(data);
    if(data.code==200){
      this.$toast.success(data.msg)
    }
    }
  },
};
</script>

<style lang="scss" scoped>
.user-edit-container {
  padding-top: 46px;
  .nav-bar {
    background: #007bff;
    color: white;
  }
  .avatar {
    width: 50px;
    height: 50px;
  }
}
</style>