<template>
  <div>
    <div class="title">
      <h3>外卖美食</h3>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item.id">
        <img :src="'http://124.93.196.45:10001' + item.advImg" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航栏 -->
    <div class="food-theme">
      <a
        href="javascript:;"
        v-for="item in list_info"
        :key="item.id"
        @click="getID(item.id)"
      >
        <img :src="'http://124.93.196.45:10001' + item.imgUrl" />
        <span>{{ item.themeName }}</span>
      </a>
    </div>
    <!-- 商户列表 -->
    <div class="food-seller">
      <div class="food-seller-title">
        <span>附近商家</span>
      </div>
      <ul>
        <li v-for="item_seller in list_seller" :key="item_seller.id">
          <a class="content">
            <div class="content-img">
              <img :src="'http://124.93.196.45:10001' + item_seller.imgUrl" />
            </div>
            <div class="content-item">
              <div class="food-name">{{ item_seller.name }}</div>
              <div class="food-num">
                <div class="food-numL">
                  <span class="score">{{ item_seller.score }}</span>
                  <span class="saleQuantity"
                    >月售:{{ item_seller.saleQuantity }}+</span
                  >
                </div>
                <div class="food-numR">
                  <span>{{ item_seller.deliveryTime }}分钟</span>
                  <span>距离:{{ item_seller.distance }}m</span>
                </div>
              </div>
              <div class="food-price">
                <span>人均 ￥{{ item_seller.avgCost }}</span>
              </div>
              <div class="food-address">
                <span>地址:{{ item_seller.address }}</span>
              </div>
            </div>
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
      list_info: [],
      list_seller: [],
    };
  },
  async created() {
    let { data } = await this.$http.get(this.$api.food.swiper, {});
    // console.log(data);
    this.list = data.rows;
    let { data: data_info } = await this.$http.get(this.$api.food.theme, {});
    // console.log(data_info);
    this.list_info = data_info.data;
    let { data: data_list } = await this.$http.get(this.$api.food.seller_list);
    this.list_seller = data_list.rows;
  },
  methods: {
    async getID(id) {
      let data = await this.$http.get(this.$api.food.seller_list, {
        themeId: id,
      });
      // console.log(data);
      this.list_seller = data.data.rows;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  background-color: #ff5f16;
  h3 {
    text-align: center;
    line-height: 30px;
    padding: 10px;
    color: white;
  }
}
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
.food-seller-title {
  margin-left: 15px;
}
.food-theme {
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-top: 15px;
  a {
    width: 20%;
    flex-direction: column;
    display: flex;
    padding: 5px 0;
    align-items: center;
    // justify-content: space-evenly;
    img {
      width: 50%;
    }
    span {
      line-height: 0.54rem;
      font-size: 0.3rem;
      color: #ff5f16;
    }
  }
}
ul {
  .content {
    padding: 12px;
    flex-direction: row;
    display: flex;
    text-decoration: none;
    box-sizing: border-box;
    margin-bottom: 6px;
    position: relative;
    border-radius: 12px;
    background: #ffffff;
    content-visibility: auto;
    .content-img {
      width: 82px;
      height: 110px;
      position: relative;
      box-sizing: border-box;
      margin-right: 8px;
      flex-shrink: 0;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        border-radius: 6px;
      }
    }
    .content-item {
      flex: 1 0;
      min-width: 0;
      .food-name {
        font-size: 16px;
        color: #222426;
        line-height: 20px;
        white-space: nowrap;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
      }
      .food-num {
        margin-top: 3px;
        display: flex;
        .score {
          margin-left: 4px;
          font-size: 14px;
          color: #ff8000;
          font-weight: 600;
        }
        .saleQuantity {
          margin-left: 10px;
          font-size: 14px;
        }
        .food-numR {
          flex: 1 0;
          text-align: right;
          span {
            font-size: 11px;
            color: #858687;
            line-height: 14px;
            font-weight: 400;
          }
        }
      }
      .food-price {
        margin-top: 4px;
        span {
          font-size: 11px;
          color: #858687;
          line-height: 14px;
          font-weight: 400;
        }
      }
      .food-address {
        margin-top: 10px;
        font-size: 11px;
        color: black;
        line-height: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>