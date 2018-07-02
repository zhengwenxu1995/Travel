<template>
    <div class="recommend">
        <div class="title">
            周目去哪儿
        </div>
        <ul>
            <li class="item-cont border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img">
                    <img class="img-cont" :src="item.imgUrl" alt="">
                </div>
                <div class="item-msg">
                    <p class="item-msg-title">{{item.title}}</p>
                    <p class="item-msg-cont">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        weekendList:Array
    }
    
}
</script>

<style lang="stylus" scoped>
@import "~style/mixins.styl"
    .recommend
        margin-top :0.2rem
        .title
            background :#eee
            padding :.25rem .2rem
        .item-msg
            padding : 0.2rem
            .item-msg-title
                margin-bottom :.2rem
                font-size :0.35rem
            .item-msg-cont
                width :80%
                color :#999
                ellipsis()

</style>