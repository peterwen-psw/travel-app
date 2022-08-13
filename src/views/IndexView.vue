<template>
  <div id="bgc">
    <!-- //搜索 -->
    <van-search
      v-model="value"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- //轮播 -->
    <index-swiper :list="list" ref="myswiper"></index-swiper>
    <!-- 更多服务 -->
    <div class="server">
      <router-link
        :to="item2.link"
        v-for="item2 in list2.slice(0, 9)"
        :key="item2.id"
      >
        <img :src="'http://124.93.196.45:10001' + item2.imgUrl" />
        <span>{{ item2.serviceName }}</span>
      </router-link>
      <router-link to="/service">
        <span>更多服务</span>
      </router-link>
    </div>
    <!-- 热门主题 -->
    <!-- <div class="Hot-topics">
      <div class="topic-title">
        <span style="font-size: 16px">热门主题</span>
      </div>
      <div class="topic-item">
        <div class="topic"></div>
        <div class="topic"></div>
        <div class="topic"></div>
        <div class="topic"></div>
      </div>
    </div> -->
    <!-- 新闻专栏 -->
    <div class="news">
      <div class="news-title">
        <span style="font-size: 16px; margin-left: 15px">新闻专栏</span>
      </div>

      <van-tabs v-model="active">
        <van-tab v-for="item in list_news" :key="item.id" :name="item.id">
          <template #title>
            <van-icon name="more-o" />
            {{ item.name }}
          </template>
        </van-tab>
      </van-tabs>
      <!-- 新闻内容 -->
      <!-- <van-card
      v-for="item3 in list_newscontent.slice(0,15)"
      :key="item3.id"
        :title="商品标题"
        :thumb="'http://124.93.196.45:10001' + item3.cover"
      /> -->

    <div class="item" v-for="item3 in list_typeid" :key="item3.id">
      <div class="item-img">
        <img :src="'http://124.93.196.45:10001' + item3.cover" />
      </div>
      <div class="item-info">
        <div class="title">
          <h3
            style="
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
          >
            {{ item3.title }}
          </h3>
        </div>
        <div class="num">
          评论总数:<span>{{ item3.commentNum }}</span>
        </div>
        <div class="time">
          发布时间: <span> {{ item3.updateTime }}</span>
        </div>
        <div
          class="content"
          v-html="
            item3.content.replaceAll(
              '/prod-api/',
              'http://124.93.196.45:10001/prod-api/'
            )
          "
        ></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import IndexSwiper from "../components/IndexSwiper.vue";
export default {
  components: { IndexSwiper },
  data() {
    return {
      value: "",
      IndexSwiper,
      list: [],
      list2: [],
      list_news: [],
      list_newscontent: [],
      active: 1,
      list_typeid:[],
    };
  },
  watch: {
    async active(type) {
      let data= await this.$http.get(this.$api.user.newcontent, {type});
      this.list_typeid=data.data.rows;
    },
  },
  async created() {
    let { data } = await this.$http.get(this.$api.user.swiper, { type: 2 });
    this.list = data.rows;
    let { data: data2 } = await this.$http.get(this.$api.user.service, {});
    this.list2 = data2.rows;
    let { data: data_news } = await this.$http.get(this.$api.user.newtype, {});
    this.list_news = data_news.data;
    // item3.content=data_newscontent.rows.content.replaceAll("/prod-api/","http://124.93.196.45:10001/prod-api/" )

    // console.log(data_newscontent);
  },
  methods: {
    onSearch() {
      this.$router.push("/news");
    },
    gotoNews() {
      this.$router.push("/news");
    },
  },
};
</script>

<style lang="scss" scoped>
#bgc {
  background-color: silver;
}
// 轮播样式

.server {
  background-color: #fff;
  margin-top: 15px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  a {
    width: 20%;
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
.Hot-topics {
  margin-top: 15px;
  background-color: #fff;
  width: 100%;
  // height: 400px;
  .topic-item {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    justify-content: space-around;

    .topic {
      width: 50%;
      justify-content: space-evenly;
      margin: 10px;
      display: flex;
      border: 1px solid black;
      border-radius: 20px;
      width: 150px;
      height: 150px;
    }
  }
}
.news {
  margin-top: 15px;
  background-color: #fff;
  height: 800px;
  width: 100%;
  .menu-bar {
    width: 100%;
    .menu-list {
      width: max-content;
      display: flex;
      flex-wrap: nowrap;
      font-size: 0.24rem;
      line-height: 0.72rem;
      a {
        padding: 0 0.2rem;
      }
      a:active {
        color: #ff5f16;
      }
    }
  }
  .item {
  width: 100%;
  display: flex;
  height: 100px;
  margin: 0 10px;
  margin-top: 10px;
  font-size: 14px;
  border-bottom: 1px solid silver;
  border-top: 1px solid silver;
  .item-img {
    flex: 1;
    img {
      width: 100%;
      height: 100px;
    }
  }
  .item-info {
    margin: 0 15px;
    flex: 2;
    overflow: hidden;
    div {
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        color: #ff5f16;
      }
    }
    .title,
    .num,
    .time {
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      overflow: hidden;
      ::v-deep p {
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
}
</style>