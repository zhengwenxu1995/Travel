<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <div>年后</div>
    </div>
</template>

<script>
import homeHeader from "./components/homeHeader"
import homeSwiper from "./components/swiper"
    export default {
        name:"Home",//组件名字,
        components:{
             homeHeader,
             homeSwiper
        }
       
    }
</script>
<style>

</style>