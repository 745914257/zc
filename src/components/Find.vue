<template>
<div class="find">

  <van-search v-model="value" placeholder="请输入搜索关键词" />

</div>
</template>

<script>
  import "./../assets/css/focus.css"
  import "./../assets/js/focus"
  export default {
    data(){
      return{
        value:"",
      }
    },


  }
</script>
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }
  .find{
    width: 90%;
    margin: 5px auto;
  }

</style>

