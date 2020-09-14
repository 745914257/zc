<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"  src="./../../static/1.jpg"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>

    export default {
      data(){
        return{
          images: [
            "./../../static/1.jpg",
            "./../../static/2.jpg",
            "./../../static/3.jpg",
          ],
        }
      },


    }
</script>
<style type="text/css">
  *{
    margin: 0;
    padding: 0;
  }
  .van-swipe{
    margin:  0 auto;
    width: 90%;
    height: 150px;
  }
  .van-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>


