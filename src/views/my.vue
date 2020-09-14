<template>
  <div>
    <nav-bar :name="name" :left="true"></nav-bar>

    <div class="my">
      <div class="photo">
        <img src="./../../static/1.jpg">
      </div>

      <p class="name">昵称</p>
      <p class="userId">账号：<span>00000000</span></p>

      <div class="do">
        <div>
          <img src="./../../static/1.jpg">
          <p>购物车</p>
        </div>
        <div>
          <img src="./../../static/1.jpg">
          <p>未完成订单</p>
        </div>        <div>
        <img src="./../../static/1.jpg">
        <p>待评价</p>
      </div>        <div>
        <img src="./../../static/1.jpg">
        <p>全部订单</p>
      </div>
      </div>

      <div class="foot">
        <ul>
          <li>个人信息</li>
          <li>关于我们</li>
          <li>版本号 V 1.0</li>
        </ul>
      </div>
    </div>







    <tabbar></tabbar>
  </div>
</template>

<script>
  import "./../assets/css/my.css"
  import Tabbar from"./../components/Tabbar"
  import NavBar from "../components/navBar";
  export default {
    data(){
      return{
        name:"我"
      }
    },
    components: {
      NavBar,
      Tabbar,

    },
  }
</script>
