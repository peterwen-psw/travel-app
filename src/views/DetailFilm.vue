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
      <div>{{ list.name }}</div>
      <div>
        <div class="detail-text">喜欢人数:{{ list.favoriteNum }}</div>
        <div class="detail-text">{{ list.playDate }} 上映</div>
        <div class="detail-text">
          {{ list.language }} | {{ list.duration }}分钟
        </div>
        <div
          class="detail-text"
          style="line-height: 15px; color: #797d82"
          :class="isHidden ? 'hidden' : ''"
          v-html="list.introduction"
        ></div>
        <div style="text-align: center" @click="isHidden = !isHidden">↓</div>
      </div>
      <a
        href=""
        style="height: 49px; position: fixed; bottom: 0px; width: 100%"
      >
        <div class="goSchedule">选座购票</div>
      </a>
    </div>
  </div>
</template>

<script>
import changeNav from "../mixins/changeNav";
export default {
  data() {
    return {
      list: [],
      isHidden: true,
    };
  },
  async created() {
    let id = this.$route.params.id;
    let { data } = await this.$http.get(this.$api.movie.detail_now + id);
    this.list = data.data;
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
    color: #797d82;
    font-size: 13px;
    margin-top: 4px;
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