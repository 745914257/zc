<template>
  <div class="order">
    <nav-bar :name="name" :left="true"></nav-bar>

    <div class="content">

      <ul class="address">
        <li><span>收货地址：        </span><p>XXXXXXXXXX</p></li>
        <li><span>联系人：&#12288; </span><p>XXX</p><img class="chooseAddress" src="./../../static/left_arrow.png" @click="chooseAddress" /></li>
        <li><span>联系方式：        </span><p>XXXXXXXXXXX</p></li>
      </ul>
      <ul class="good">
        <li class="good-content">
          <img src="./../../static/1.jpg">
          <ul class="detail" >
            <span class="name">商品名称</span>
            <li><span>规格：</span><p>5kg/箱</p></li>
            <li><span>单价：</span><p>￥29.9/箱</p></li>
            <li><span>数量：</span><p>1箱</p></li>
          </ul>
          <div class="price">￥29.9</div>
        </li>


        <li class="good-content">
          <img src="./../../static/1.jpg">
          <ul class="detail" >
            <span class="name">商品名称</span>
            <li><span>规格：</span><p>5kg/箱</p></li>
            <li><span>单价：</span><p>￥29.9/箱</p></li>
            <li><span>数量：</span><p>1箱</p></li>
          </ul>
          <div class="price">￥29.9</div>
        </li>
      </ul>


      <ul class="orderMessage">
        <span class="name">订单信息</span>
        <li><span>订单号：&#12288;               </span><p>0000000000</p></li>
        <li><span>下单时间：                      </span><p>0000-00-00</p></li>
        <li><span>备注： &#12288;&#12288;       </span><p>XXXXXXXXXX</p></li>
      </ul>

      <div class="submit-order">
        <p>合计：<span>￥59.8</span></p>
        <button class="submit">提交订单</button>
      </div>

    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import "./../assets/css/order.css"
  import Tabbar from "../components/Tabbar";
  import NavBar from "../components/navBar";
  export default {
    data(){
      return{
        name:"确认订单"
      }
    },
    components: {
      NavBar,
      Tabbar,


    },
    methods:{
      returnback(){
        this.$router.go(-1)
      },
      chooseAddress(){
        this.$router.push({
          path:"/addressList"
        })
      },
    }
  }
</script>

<style type="text/css">
  .van-nav-bar{

  }
</style>
