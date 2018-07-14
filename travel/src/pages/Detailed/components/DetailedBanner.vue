<template>
    <div>
        <div class="detalied-banner" 
        @click="changeShowGallary"
        >
            <img class="banner-img" :src="this.bannerImg">
            <div class="banner-title">
                <p class="banner-msg">{{this.sightName}}</p>
                <div class="iconfont-imgList">
                    <span class="iconfont">&#xe62f;&nbsp;&nbsp;</span>
                    <em>{{this.gallaryImgs.length}}</em>
                </div>
            </div>
        </div>
        <fade-animation>
            <picture-show :gallaryImgs="this.gallaryImgs" v-show="showGallary" @close="hideGallary"></picture-show>
        </fade-animation>
</div>
</template>

<script>
import PictureShow from "common/gallary"
import FadeAnimation from "common/FadeAnimation"
export default {
    name:"DetailedCity",
    components:{
        PictureShow,
        FadeAnimation
    },
    props:{
        bannerImg:String,
        gallaryImgs:Array,
        sightName:String
    },
    data (){
        return {
            showGallary:false,
        }
    },
    methods:{
        changeShowGallary(){
            this.showGallary=true
        },
        hideGallary(){
            this.showGallary=false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .detalied-banner
        overflow :hidden
        height :0
        padding-bottom :4rem
        vertical-align :top
        position :relative
        .banner-img
            width :100%
        .banner-title
            position :absolute
            left :0
            right :0
            bottom :0
            display :flex
            padding-bottom :0.1rem
            background :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.5))
            justify-content :space-between
            .banner-msg
                padding-bottom :0.1rem
                color :#fff
                padding : 0.1rem
                font-size :0.35rem
            .iconfont-imgList
                padding :0 0.22rem
                color :#fff
                font-size :0.28rem
                display :inline-block
                line-height :0.5rem
                border-radius :0.4rem
                background :rgba(0,0,0,0.5)
</style>