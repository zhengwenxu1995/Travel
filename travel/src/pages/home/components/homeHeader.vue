<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">
                &#xe602;
            </div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe792;</span>输入城市/景点游玩主题</div>
        <router-link to="/city">
            <div class="header-right">{{this.city}}<span class="iconfont city">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
    homeHeader:"homeHeader",
    props:{
        city:String
    }
}
</script>
<style lang="stylus" scoped>
@import "~style/varibles.styl"
    .header
        background :$bgColor
        height :0.86rem
        display :flex
        width :100%
        color :#fff
    .header-left
        line-height :0.86rem
        text-align :center
        width :0.6rem
        .back-icon
            margin-left :0.1rem
    .header-input
        padding-left :0.2rem
        line-height :.64rem
        height :0.64rem
        color :#ccc
        border-radius :.1rem
        margin :.12rem 0 0rem .2rem
        flex :1
        background :#fff
    .header-right
        width :1.28rem
        line-height :0.86rem
        text-align :center
        color :#fff
        .city
            font-size : 0.20rem
</style>    