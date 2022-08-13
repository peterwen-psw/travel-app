<template>
  <div id="ser">
    <h3>全部服务</h3>
    <div class="server">
      <router-link :to="item.link" v-for="item in list" :key="item.id">
        <img :src="'http://124.93.196.45:10001' + item.imgUrl" />
        <span>{{ item.serviceName }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  async created() {
    let { data } = await this.$http.get(this.$api.user.service, {});
    this.list = data.rows;
  },
};
</script>

<style lang="scss" scoped>
#ser{
  background-color: #ff5f16;
}
h3{
  text-align: center;
  line-height: 30px;
  padding: 10px;
  color: white;
}
.server {
  background-color: #fff;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  a {
    width: 33.3%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
    display: flex;
    img {
      width: 50%;
    }
    span {
      line-height: 0.54rem;
      font-size: 0.3rem;
    }
  }
}
</style>