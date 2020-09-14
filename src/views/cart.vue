<template>
  <div>
    <nav-bar :name="name" :left="true"></nav-bar>
    <div class="cart">
      <div class="content">

        <div class="all-check">
          <a href="#">
            <van-checkbox :value="true"  icon-size="20"shape="square" @click="checkedAll">全选</van-checkbox>
          </a>
        </div>

        <ul class="good">
          <li class="distance">
            <van-checkbox :value="checkedFlag" icon-size="20" @click="checked"></van-checkbox>
            <img src="#" class="photo">
            <ul>
              <span>商品名称</span>
              <li class="old">￥39.9</li>
              <li class="new">￥29.9</li>
            </ul>

            <div class="num">
              <nut-stepper
                :value="num"
                :transition="false"
                :simple="false"
                :min="1"
                @add="add"
                @reduce="reduce"
              ></nut-stepper>
            </div>
          </li>

          <li class="distance">
            <van-checkbox :value="checkedFlag" icon-size="20"></van-checkbox>
            <img src="#" class="photo">
            <ul>
              <span>商品名称</span>
              <li class="old">￥39.9</li>
              <li class="new">￥29.9</li>
            </ul>

            <div class="num">
              <nut-stepper
                :value="num"
                :transition="false"
                :simple="false"
                :min="1"
                @add="add"
                @reduce="reduce"
              ></nut-stepper>
            </div>
          </li>
          <li class="distance">
            <van-checkbox :value="checkedFlag" icon-size="20"></van-checkbox>
            <img src="#" class="photo">
            <ul>
              <span>商品名称</span>
              <li class="old">￥39.9</li>
              <li class="new">￥29.9</li>
            </ul>

            <div class="num">
              <nut-stepper
                :value="num"
                :transition="false"
                :simple="false"
                :min="1"
                @add="add"
                @reduce="reduce"
              ></nut-stepper>
            </div>
          </li>

          <button @click="goOrder">购买</button>
        </ul>

      </div>



      <div class="interest">
        <div class="title">
          <div></div>
          <span>推荐</span>
          <div></div>
        </div>
        <ul class="nei">
          <li @click="turnDetail">
            <img>
            <p>商品名称</p>
            <span class="price">￥99</span>
            <div class="progress">
              <nut-progress
                :percentage="30"
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
                :percentage="30"
                :text-inside="false"
                stroke-width="10">
              </nut-progress>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from"./../components/Tabbar"
  import "./../assets/css/cart.css"
  import NavBar from "../components/navBar";
  export default {
    data(){
      return{
        name:"购物车",
        checked:"false",
        num:2,
        checkedAllFlag:false,
        checkedFlag:true,
      }
    },
    components: {
      NavBar,
      Tabbar,
    },
    methods:{
      checkedAll(){
        this.checkedAllFlag = !this.checkedAllFlag
        if(this.checkedAllFlag == true){
          this.checkedFlag = true
        }else {
          this.checkedFlag = false
        }

      },
      add(){
        console.log("+++++++++++")
      },
      reduce(){
        console.log("----------")
      },
      goOrder(){
        this.$router.push({
          path:"/order"
        })
       },
      turnDetail(){
        this.$router.push({
          path:"/detail"
        })
      },
    }
  }
</script>

