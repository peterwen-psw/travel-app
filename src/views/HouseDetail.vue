<template>
  <div v-if="list">
    <div
      :style="{
        backgroundImage: 'url(' + 'http://124.93.196.45:10001' + list.pic + ')',
      }"
      class="poster"
    ></div>
    <div class="content">
      <div>{{ list.sourceName }}</div>
      <div>
        <div class="detail-text" style="color: #ff961e">
          <h3>￥{{ list.price }}</h3> 
        </div>
        <div class="detail-text">面积: {{ list.areaSize }} 平方</div>
        <div class="detail-text">联系电话:{{ list.tel }}</div>
        <div class="detail-intro">房源介绍</div>
        <div class="detail-content" :class="isHidden ? 'hidden' : ''">
          &emsp;&emsp;{{ list.description }}。
        </div>
        <div style="text-align: center" @click="isHidden = !isHidden">↓</div>
      </div>
      <router-link
        href=""
        style="height: 49px; position: fixed; bottom: 0px; width: 100%"
        to="/house/index"
      >
        <div class="goSchedule" @click="gotoNews">返回</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import changeNav from "../mixins/changeNav";
export default {
  data() {
    return {
      list: {},
      isHidden: true,
    };
  },
  async created() {
    let id = this.$route.params.id;
    let { data } = await this.$http.get(this.$api.house.detail + "/" + id);
    // console.log(data);
    this.list = data.data;
  },
  methods: {
    gotoNews() {
      // this.$router.push("/news");
    },
  },
  mixins: [changeNav],
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 350px;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 15px;
  font-size: 18px;
  // overflow: hidden;

  .detail-text {
    color: black;
    font-size: 13px;
    margin-top: 4px;
        color: silver;
  }
  .detail-intro{
    margin: 5px 0;
  }
  .detail-content{
    font-size: 16px;
  }
}
.goSchedule {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
}
.hidden {
  overflow: hidden;
  height: 50px;
}
</style>