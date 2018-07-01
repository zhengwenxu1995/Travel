<template>
    <div class="icons">
        <swiper class="swiper-list" :options="swiperOption" >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="itemcont of page" :key="itemcont.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="itemcont.imgUrl">
                    </div>
                    <p class="text-cont">{{itemcont.textDes}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"homeIcon",
    data(){
        return {
            swiperOption :{},
            listIcon:[
                {
                    id:"001",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    textDes:"热门景点"
                },{
                    id:"002",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    textDes:"必游榜单"
                },
                {
                    id:"003",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
                    textDes:"夏日玩水"
                },
                {
                    id:"004",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    textDes:"一日游"
                },
                {
                    id:"005",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                    textDes:"动植物园"
                },
                {
                    id:"006",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                    textDes:"故宫"
                },
                {
                    id:"007",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                    textDes:"动植物园"
                },
                {
                    id:"008",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                    textDes:"故宫"
                },{
                    id:"009",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    textDes:"必游榜单"
                },
                {
                    id:"010",
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
                    textDes:"夏日玩水"
                }
            ]
        }
    },
    computed:{
        pages(){
            const pages=[];
            this.listIcon.forEach((item,index)=>{
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