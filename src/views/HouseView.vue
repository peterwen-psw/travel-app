<template>
  <div>
    <!-- 标题 -->
    <div class="title">
      <h3>好房推荐</h3>
    </div>

    <!-- 标签 -->
    <van-tabs v-model="active">
      <van-tab
        v-for="item in list_houseType"
        :key="item.id"
        :name="item.houseType"
      >
        <template #title>
          {{ item.houseType }}
        </template>
      </van-tab>
    </van-tabs>

    <!-- 列表 -->
    <div class="recommend-lists">
      <ul class="house-lists">
        <li v-for="item2 in list_detail" :key="item2.id">
          <a @click="gotoDetail(item2.id)">
            <img :src="item2.pic | filterImg" />
            <!-- <img :src="'http://124.93.196.45:10001' + item2.pic" /> -->
            <h3 class="house-lists-name">{{ item2.sourceName }}</h3>
            <h3 class="house-lists-districtname">
              面积:{{ item2.areaSize }} | 联系电话:{{ item2.tel }}
            </h3>
            <h3 class="house-lists-price">￥{{ item2.price }}</h3>
            <div class="house-tags">{{ item2.description }}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      list_houseType: [
        { id: 0, houseType: "租房" },
        { id: 1, houseType: "二手" },
        { id: 2, houseType: "楼盘" },
        { id: 3, houseType: "中介" },
      ],
      active: 1,
      list_detail: [],
    };
  },
  watch: {
    async active(houseType) {
      let data = await this.$http.get(this.$api.house.nav, { houseType });
      this.list_detail = data.data.rows;
    },
  },
  methods: {
    gotoDetail(id) {
      // console.log(id);
      this.$router.push("/house_detail/" + id);
    },
  },
  async created() {
    let data = await this.$http.get(this.$api.house.nav, {});
    // console.log(data);
    this.list = data.data.rows;
  },
};
</script>

<style lang="scss" scoped>
.title {
  background-color: #ff5f16;
}
h3 {
  text-align: center;
  line-height: 30px;
  padding: 10px;
  color: white;
}
.recommend-lists {
  margin-top: 20px;
  .house-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      flex: 0 0 4.32rem;
      margin-right: 0.267rem;
      margin-bottom: 0.747rem;
      overflow: hidden;
      white-space: nowrap;
      a {
        display: block;
        img {
          width: 100%;
          height: 3.253rem;
        }
        .house-lists-name {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.85);
          letter-spacing: 0;
          line-height: 2px;
          // margin-top: 0.32rem;
          // margin-bottom: 0.16rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .house-lists-districtname {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
          letter-spacing: 0;
          line-height: 2px;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .house-lists-price {
          color: #ff961e;
          letter-spacing: 0;
          line-height: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .house-tags {
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
