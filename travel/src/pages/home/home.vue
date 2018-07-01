<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
    </div>
</template>

<script>
import homeHeader from "./components/homeHeader"
import homeSwiper from "./components/swiper"
import homeIcon from "./components/homeIcon"
    export default {
        name:"Home",//组件名字,
        components:{
             homeHeader,
             homeSwiper,
             homeIcon
        }
       
    }
</script>
<style>

</style>