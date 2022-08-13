<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in list" :key="item.id">
      <img :src="'http://124.93.196.45:10001' + item.advImg" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: ["list"],
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
</style>