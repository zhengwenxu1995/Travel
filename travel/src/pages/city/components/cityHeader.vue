
<template>
    <div class="header">
        <div class="header-title">
            <router-link to="/">
                <div class="iconfont back-icon">
                &#xe602;
            </div>
            </router-link>
            城市列表
        </div>
        <div class="city-chang">
            <div class="city-cont change">
                境内
            </div>
            <div class="city-cont">
                境外·港澳台
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"City"
}
</script>

<style lang="stylus" scoped >
@import "~style/varibles.styl"
    .header
        height :1.5rem
        background :$bgColor
        color :#fff
        .header-title
            color :#fff
            padding : 0 1rem
            position relative
            text-align :center
            line-height :1rem
            font-size :.32rem
            .back-icon
                color :#fff
                position :absolute
                left :0
                font-size :.4rem
                padding-left :0.1rem
        .city-chang
            width :5.23rem
            border :1px solid #fff
            border-radius :0.04rem
            margin :0 auto
            overflow :hidden
            .city-cont
                width :50%
                text-align :center
                float :left
                box-sizing :border-box
                line-height :0.3rem
                border :1px solid $bgColor
            .change
                background :#fff
                color :$bgColor
                border :1px solid #eee
</style>