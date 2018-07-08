<template>
    <div>
        <div class="detalied-banner" 
        @click="changeShowGallary"
        >
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_600x330_8b674516.jpg">
            <div class="banner-title">
                <p class="banner-msg">北京北京欢乐水魔方</p>
                <div class="iconfont-imgList">
                    <span class="iconfont">&#xe62f;&nbsp;&nbsp;</span>
                    <em>11</em>
                </div>
            </div>
        </div>
        <fade-in>
            <picture-show :imgs="imgs" v-show="showGallary" @close="hideGallary"></picture-show>
        </fade-in>
        
</div>
</template>

<script>
import PictureShow from "common/gallary"
import FadeIn from "common/fade"
export default {
    name:"DetailedCity",
    components:{
        PictureShow,
        FadeIn
    },
    data (){
        return {
            showGallary:false
            ,
            imgs:[
                "http://img1.qunarzz.com/sight/p0/1508/9d/562cd6d9885f4b7291d61c2d1017a222.water.jpg_r_800x800_9a977690.jpg",
                "http://img1.qunarzz.com/sight/p0/1411/9d/703ad77a2c0297fcc15fbecf78477e7c.water.jpg_r_800x800_05052925.jpg"
            ]
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