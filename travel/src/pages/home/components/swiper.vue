<template>
    <div class="swiper">
        <swiper :options="swiperOption" >
    <!-- slides -->
            <swiper-slide v-for="item of imgUrl" :key="item.id">
                <img class="img-swiper" :src="item.url">
            </swiper-slide>
    
    <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "homeSwiper",
  data() {
    return {
      swiperOption: {
          pagination:".swiper-pagination",
          loop:true
      },
      imgUrl: [
        {
          id: "01",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_750x200_b99b8e07.jpg"
        },
        {
          id: "02",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg"
        },
        {
          id: "03",
          url:
            "http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg"
        },
        {
          id: "04",
          url:
            "http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
        }
      ]
    };
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
    padding-bottom :26.25%
    .img-swiper 
        width: 100%;
</style>