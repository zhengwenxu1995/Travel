<template>
    <div class="icons">
        <swiper class="swiper-list" :options="swiperOption" >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="itemcont of page" :key="itemcont.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="itemcont.imgUrl">
                    </div>
                    <p class="text-cont">{{itemcont.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"homeIcon",
    props:{
        iconList:Array
    },
    data(){
        return {
            swiperOption :{},
            
        }
    },
    computed:{
        pages(){
            const pages=[];
            this.iconList.forEach((item,index)=>{
                const pageIndex=Math.floor(index/8);
                if(!pages[pageIndex]){
                    pages[pageIndex]=[];
                }
                pages[pageIndex].push(item);
            })
            return pages
        } 
    }
}

</script>

<style lang="stylus" scoped>
@import "~style/varibles.styl"
@import "~style/mixins.styl"
.swiper-list>>> .swiper-pagination-bullet-active
        background :#999

    .icons >>> .swiper-list
        height :0
        padding-bottom :50%
    .icons
        margin-top :0.2rem
        .icon
            position :relative
            overflow hidden
            float :left
            height :0
            width :25%
            padding-bottom :25%
        .icon-img
            position :absolute
            right :0
            left :0
            top :0
            bottom :0.44rem
            box-sizing :border-box
            padding :0.1rem
        .icon-img-content
            display :block
            height :100%
            margin :0 auto
        .text-cont
            position :absolute
            left :0
            right :0
            bottom :0
            height :.44rem
            line-height :.44rem
            text-align :center
            color :$textColor
            ellipsis()
</style>