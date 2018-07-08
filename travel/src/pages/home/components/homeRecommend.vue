<template>
    <div class="recommend">
        <div class="title">
            热销推荐
        </div>
        <ul>
            <router-link tag="li"  class="item-cont border-bottom" v-for="item of recommendList" :key="item.id" :to="'/Detailed/'+item.id">
                <div class="item-img">
                    <img class="img-cont" :src="item.imgUrl" alt="">
                </div>
                <div class="item-msg">
                    <p class="item-msg-title">{{item.title}}</p>
                    <p class="item-msg-cont">{{item.desc}}</p>
                    <button class="item-btn">
                        查看详情
                    </button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        recommendList:Array
    },
    data(){
        return {
           
        }
    },
    
}
</script>

<style lang="stylus" scoped>
@import "~style/mixins.styl"
    .recommend
        margin-top :0.2rem
        .title
            background :#eee
            padding :.25rem .2rem
        .item-cont
            display :flex
            overflow hidden
            height :1.9rem
            padding : 0.1rem
            .img-cont
                height :1.9rem
                width :1.9rem
            .item-msg
                min-width :0
                padding : 0.2rem
                .item-msg-title
                    margin-bottom :.2rem
                    font-size :0.35rem
                .item-msg-cont
                    width :80%
                    color :#999
                    ellipsis()
                .item-btn
                    border-radius :0.1rem
                    padding 0.05rem .2rem
                    background :#ffa445
                    margin-top :.25rem
                    color :#fff

</style>