<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" @click="gotoDetail(item.id)" >
        <div class="left">
          <div class="cinema_name">{{ item.name }}</div>
          <div class="cinema_text">{{ item.address }}</div>
        </div>
        <div class="right cinema_num">
          <div style="color:red;">评分:{{ item.score }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    gotoDetail(id){
      // console.log(id);
      this.$router.push("/cinema_detail/"+id)
    }
  },
  async created() {
    let { data } = await this.$http.get(this.$api.movie.cinema, {});
    this.list = data.rows;
  },
};
</script>

<style lang="scss" scoped>
li {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  .left{
      width: 300px;
  }
  .cinema_name{
      font-size: 15px;
  }
  .cinema_num{
      font-size: 12px;
  }
  .cinema_text{
      color: #797d82;
      font-size: 12px;
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
}
</style>