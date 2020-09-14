<template>
  <div class="index">
    <nav-bar :name="name" :left="false"></nav-bar>
    <Find></Find>
    <focus></focus>

    <ul class="container">
      <li @click="turnDetail">
        <img>
        <p>商品名称</p>
        <span class="price">99</span>
        <div class="progress">
          <nut-progress
            percentage="30"
            :text-inside="false"
            stroke-width="10">
          </nut-progress>
        </div>
      </li>

      <li @click="turnDetail">
        <img>
        <p>商品名称</p>
        <span class="price">￥99</span>
        <div class="progress">
          <nut-progress
            percentage="30"
            :text-inside="false"
            stroke-width="10">
          </nut-progress>
        </div>
      </li>

      <li @click="turnDetail">
        <img>
        <p>商品名称</p>
        <span class="price">￥99</span>
        <div class="progress">
          <nut-progress
            percentage="30"
            :text-inside="false"
            stroke-width="10">
          </nut-progress>
        </div>
      </li>
      <li @click="turnDetail">
        <img>
        <p>商品名称</p>
        <span class="price">￥99</span>
        <div class="progress">
          <nut-progress
            percentage="30"
            :text-inside="false"
            stroke-width="10">
          </nut-progress>
        </div>
      </li>



    </ul>

    <tabbar></tabbar>
  </div>
</template>

<script>
  import "./../assets/css/index.css"
  import Focus from "./../components/focus"
  import Tabbar from"./../components/Tabbar"
  import navBar from "./../components/navBar"
  import  Find  from "./../components/Find"
    export default {
      data(){
        return{
          name:"众筹"
        }
      },
      components: {
        Focus,
        Tabbar,
        Find,
        navBar
      },
      methods:{
        turnDetail(){
          this.$router.push({
            path:"/detail",
            params:{ //传入商品的编号
            }

          })
        },

      }
    }
</script>


