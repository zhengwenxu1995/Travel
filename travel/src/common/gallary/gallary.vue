<template>
    <div class="picture-pater" @click="hideGallary">
        <div class="swiper" >
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
                    <img class="img-swiper" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

export default {
    name : "PictureShow",
     props:{
        gallaryImgs:Array  
    },
    data(){
        return {
            swiperOption:{
                pagination:".swiper-pagination",
                paginationType:"fraction",
                observer:true,
                observeParents:true
            },
        } 
    },
   
    methods:{
        hideGallary(){
            this.$emit("close")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper >>> .swiper-container
        overflow :inherit
    .picture-pater
        position :fixed
        left :0
        right :0
        bottom :0
        top :0
        background :#000
        z-index :99
        display :flex
        justify-content :center
        flex-direction :column
        .swiper
            width :100%
            height :0
            padding-bottom :100%
            .img-swiper
                width :100%
            .swiper-pagination
                color :#fff
                bottom :-2.5rem
</style>