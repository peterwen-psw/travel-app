<template>
  <div class="nowplaying">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="ischeck"
      >
        <div
          class="item"
          v-for="item in list.slice(1,15)"
          :key="item.id"
          @click="gotoDetail(item.id)"
        >
          <div class="item-img">
            <img :src="'http://124.93.196.45:10001' + item.cover" />
          </div>
          <div class="item-info">
            <div >
              {{ item.name }} 
            </div>
            <div>
              观众评分 <span>{{ item.score }}</span>
            </div>
            <div>
              简介:<span v-html="item.introduction" >{{item.introduction}}</span>
            </div>
            <div>时长: {{ item.duration }}分钟</div>
          </div>
          <div class="item-buy">
            <button>购票</button>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false, //表示加载的状态
      finished: false, //表示数据是否请求完成
      ischeck: false, //表示第一次是否加载
      pageNum: 1, //默认显示第一页
      refreshing: false, //下拉刷新的状态
    };
  },
  methods: {
    gotoDetail(id) {
      // console.log(id);
      this.$router.push({
        name: "detail_soon",
        params: {
          id,
        },
      });
    },
    onRefresh() {
      //下拉刷新的事件
      this.refreshing = false;
      this.finished = false;
      this.list.length = 0;
      this.pageNum = 0;
      this.onLoad();
    },
    async onLoad() {
      // console.log("碰到了底部");
      //请求下一页的数据
      this.pageNum++;

    },
  },
  async created() {
    let { data } = await this.$http.get(this.$api.movie.comingsoon,{}
    );
    // console.log(data);
    this.list = data.rows;
  },
};
</script>

<style lang="scss" scoped>
.nowplaying {
  .item {
    width: 100%;
    display: flex;
    height: 100px;
    margin:0 10px;
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
      margin-left: 15px;
      flex: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      div {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span{
          color: #ff5f16;
        }
      }
    }
    .item-buy {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>