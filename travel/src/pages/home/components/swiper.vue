<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="show">
    <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="img-swiper" :src="item.imgUrl">
            </swiper-slide>
    
    <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "homeSwiper",
props:{
    swiperList:Array
},
  data() {
    return {
      swiperOption: {
          pagination:".swiper-pagination",
          loop:true,
          autoplay:2000,
          speed:1000
      }
    };
  },
  computed:{
      show(){
         return this.swiperList.length
      }
  }
};
</script>

<style lang="stylus" scoped>
.swiper>>> .swiper-pagination-bullet-active
    background :#fff
.swiper
    overflow hidden
    width :100%
    height :0
    padding-bottom :31.25%
    .img-swiper 
        width: 100%;
</style>