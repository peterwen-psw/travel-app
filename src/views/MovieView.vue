<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item.id">
        <img :src="'http://124.93.196.45:10001' + item.advImg" />
      </van-swipe-item>
    </van-swipe>
    <div class="middle" :class="{ isfixed: flag }">
      <h3 v-show="flag">电影</h3>
      <div class="middle-nav">
        <div
          class="item"
          :class="{ active: item.id == activeIndex }"
          v-for="item in menuList"
          :key="item.id"
          @click="change(item)"
        >
          {{ item.msg }}
        </div>
      </div>
    </div>
    <component :is="com"></component>
    <div class="movie-nav">
      <router-link
        style="height: 49px;"
        to="/service"
      >
        返回
      </router-link>
      <router-link
        to="/cinema"
        style="height: 49px;"
      >
       影院
      </router-link>
    </div>
  </div>
</template>

<script>
import changeNav from "../mixins/changeNav";
import nowPlaying from "../views/NowPlaying.vue";
import commingSoon from "../views/CommingSoon.vue";
export default {
  data() {
    return {
      list: [],
      menuList: [
        { id: 1, msg: "正在热映", com: "nowPlaying" },
        { id: 2, msg: "即将上映", com: "commingSoon" },
      ],
      com: "nowPlaying",
      activeIndex: 1,
      flag: false,
    };
  },
  components: {
    commingSoon,
    nowPlaying,
  },
  async created() {
    let { data } = await this.$http.get(this.$api.movie.swiper, { type: 2 });
    this.list = data.rows;
  },
  methods: {
    change(item) {
      this.activeIndex = item.id;
      this.com = item.com;
    },
  },
  mixins: [changeNav],
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 150px;
  img {
    height: 150px;
    width: 100%;
  }
}
.isfixed {
  position: fixed;
  left: 0;
  top: 0;
}
.middle {
  width: 100%;
  overflow: hidden;
  z-index: 9999;
  background-color: #fff;
  .middle-nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .middle-nav .item {
    font-size: 14px;
  }
  .middle-nav .active {
    color: #ff5f16;
  }
  .city {
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 14px;
  }
}
.content {
  margin-bottom: 50px;
}
.movie-nav{
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999 ;
  background-color: #ff5f16;
  display: flex;
  justify-content: space-evenly;
  a{
      text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  }
}
// .goSchedule {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   height: 49px;
//   width: 100%;
//   text-align: center;
//   background-color: #ff5f16;
//   color: #fff;
//   font-size: 16px;
//   line-height: 49px;
// }
</style>