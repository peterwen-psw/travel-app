<template>
  <div>
    <div class="header-left">
      <van-icon name="arrow-left" @click="quit()" />
    </div>
    <div class="header-title">{{list_detail.name}}</div>
    <div class="cinema-wrap">
      <div class="cinema-info">
        <div class="tags">
          <div class="tag">前台兑换</div>
          <div class="tag">儿童票</div>
          <div class="tag">3D眼镜</div>
          <div class="tag">影厅介绍</div>
          <i class="tag-more">></i>
        </div>
        <div class="address">
          <van-icon name="location-o" />
          <div class="address-des">
            {{list_detail.address}}
          </div>
          <a href="" class="tel-icon">
            <van-icon name="phone-o" />
          </a>
        </div>
      </div>
    </div>
    <div class="schedule-list">
      <div>
        <div class="schedule-item" v-for="item in list" :key="item.id">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import changeNav from "../mixins/changeNav";
export default {
  data() {
    return {
      list: {},
      list_detail:{}
    };
  },

  watch: {},
  async created() {
    let theaterId = this.$route.params.id;
    let detail = await this.$http.get(this.$api.movie.cinema_item+theaterId);
    this.list_detail=detail.data.data;

    let { data } = await this.$http.get(this.$api.movie.cinema_list, {
      theaterId,
    });
    // console.log(data);
    this.list = data.rows;
  },
  methods: {
    quit() {
      this.$router.push("/cinema");
    },
  },
  mixins: [changeNav],
};
</script>

<style lang="scss" scoped>
.header-left {
  position: fixed;
  top: 0;
  height: 44px;
  line-height: 44px;
  padding-left: 15px;
  z-index: 303;
}
.header-title {
  position: relative;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding: 0 15px;
  background: #fff;
  top: 0;
  height: 44px;
  line-height: 44px;
  z-index: 302;
}
.cinema-info {
  .tags {
    justify-content: center;
    font-size: 15px;
    color: #ffb232;
    overflow: hidden;
    position: relative;
    padding: 5px 0 15px;
    align-items: center;
    display: flex;
    .tag {
      border: 1px solid #ffb232;
      position: relative;
      padding: 0 6px;
      margin: 0 2.5px;
      font-size: 10px;
    }
    .tag-more {
      margin-left: 5px;
    }
  }
  .address {
    height: 50px;
    position: relative;
    display: flex;
    padding-left: 17px;
    align-items: center;
    border-top: 1px solid silver;
    border-bottom: 1px solid silver;
    .address-des {
      font-size: 14px;
      height: 20px;
      padding: 0 12px;
      flex: 1;
      position: relative;
      color: #191a1b;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tel-icon {
      height: 18px;
      padding: 0 25px;
    }
  }
}
.schedule-item {
  height: 45px;
  padding: 15px 15px;
  position: relative;
  background: #fff;
  font-size: 17px;
}
</style>