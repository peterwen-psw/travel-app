<template>
  <div v-if="list">
    <div
      :style="{
        backgroundImage:
          'url(' + 'http://124.93.196.45:10001' + list.cover + ')',
      }"
      class="poster"
    ></div>
    <div class="content">
      <div>{{ list.title }}</div>
      <div>
        <div class="detail-text">点赞数:{{ list.likeNum }}</div>
        <div class="detail-text">发布日期:{{ list.publishDate }}</div>
        <div class="detail-text">阅读数:{{ list.readNum }}</div>
        <div
          class="detail-content"
          :class="isHidden ? 'hidden' : ''"
          v-html="
            list.content.replaceAll(
              '/prod-api/',
              'http://124.93.196.45:10001/prod-api/'
            )
          "
        ></div>
        <div style="text-align: center" @click="isHidden = !isHidden">↓</div>
      </div>
      <router-link
        href=""
        style="height: 49px; position: fixed; bottom: 0px; width: 100%"
        to="/news"
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
      list: {
          content:""
      },
      isHidden: true,
    };
  },
  async created() {
    let id = this.$route.params.id;
    let { data } = await this.$http.get(this.$api.user.newstext + "/" + id);
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
  }
  ::v-deep .detail-content {
    p {
      color: #797d82;
      font-size: 13px;
      margin-top: 4px;
      width: 100%;
      img {
        width: 100%;
      }
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
}
.hidden {
  overflow: hidden;
  height: 30px;
}
</style>