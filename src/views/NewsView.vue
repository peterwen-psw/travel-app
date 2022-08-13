<template>
  <div>
    <!-- 标签 -->
    <van-tabs v-model="active">
      <van-tab v-for="item in list_news" :key="item.id" :name="item.id">
        <template #title>
          <van-icon name="more-o" />
          {{ item.name }}
        </template>
      </van-tab>
    </van-tabs>
    <!-- 内容 -->
    <div class="item" v-for="item2 in list" :key="item2.id">
      <div class="item-img">
        <img :src="'http://124.93.196.45:10001' + item2.cover" />
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
            {{ item2.title }}
          </h3>
        </div>
        <div class="num">
          评论总数:<span>{{ item2.commentNum }}</span>
        </div>
        <div class="time">
          发布时间: <span> {{ item2.updateTime }}</span>
        </div>
        <div
          class="content"
          v-html="
            item2.content.replaceAll(
              '/prod-api/',
              'http://124.93.196.45:10001/prod-api/'
            )
          "
        ></div>
      </div>
      <div class="item-buy">
        <button @click="gotoDetail(item2.id)">详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list_news: [],
      list_content: [],
      list: [],
      active: 1,
    };
  },
  watch: {
    async active(type) {
      let data = await this.$http.get(this.$api.user.newcontent, { type });
      this.list = data.data.rows;
    },
  },
  methods: {
    gotoDetail(id){
      // this.$router.push({
      //   name:"news_detail",
      //   params:{
      //     id,
      //   }
      // })
      this.$router.push("/news_detail/"+id)
    }
  },
  async created() {
    let { data: data_news } = await this.$http.get(this.$api.user.newtype, {});
    this.list_news = data_news.data;
    // let {data:new_text}=await this.$http.get(this.$api.user.newstext,{});
    // console.log(data);
    // this.list_content=new_text.rows;
  },
};
</script>

<style lang="scss" scoped>
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
    flex: 3;
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
  .item-buy {
    flex: 1;
    display: flex;
    text-overflow: ellipsis;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
  }
}
</style>