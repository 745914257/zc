<template>
  <div>
    <!--<img class="return" src="./../../static/left_arrow.png" @click="returnback" />-->
    <nav-bar :name="name" :left="true"></nav-bar>
    <div class="detail">

      <div class="content">
        <img src="" class="photo" >
        <div class="nei">
          <p class="title">肥沃土地</p>
          <ul class="first">
            <li>单价:</li>
            <li>规格:</li>
            <li>数量:</li>
            <li>售出数量:</li>
            <li>进度:</li>
            <li>支持数:</li>
          </ul>
          <ul>
            <li>￥100</li>
            <li>10亩</li>
            <li>100亩</li>
            <li>50亩</li>
            <li>50%</li>
            <li>86人</li>
          </ul>
        </div>

      </div>

      <div class="choose">

      </div>

    </div>



    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

  </div>
</template>

<script>
  import "./../assets/css/detail.css"
  import NavBar from "../components/navBar";
  export default {
    data(){
      return{
        name:"商品"
      }
    },
    components: {
      NavBar
    },
    methods:{
      returnback(){
        this.$router.push({
          path:"/"
        })
      }
    }
  }
</script>
<style type="text/css">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>





