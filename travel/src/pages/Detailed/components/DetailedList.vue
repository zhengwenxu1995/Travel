<template>
<div>
    <div class="detail-content" 
     v-for="(item,index) of list"
     :key="index"
     >
        <div class="Detailed-title border-bottom" >
            <span class="list-icon"></span>
            {{item.title}}
        </div>
        <div class="detail-list" v-for="(items,indexs) in item.msg" :key="indexs" >
            <h4>{{items.content}}</h4>
            <div class="money">
                ¥<em class="how-money">
                    {{items.money}}
                </em><i>起</i>
            </div>
        </div>
        <div class="children" v-if="item.children">
            <detailed-list :list="item.children"></detailed-list>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name:"DetailedList",
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
    .detail-content
        padding :0.2rem 0.1rem
        .Detailed-title
            padding :0.2rem 0.1rem
            padding-left :0.2rem
            font-size :0.3rem
            position :relative
            margin-left :0.5rem
            .list-icon
                display :inline-block
                height :0.5rem
                width :0.4rem 
                position :absolute
                left :-0.3rem
                top :0.06rem
                background :url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -0.35rem
                background-size :0.4rem 
        .detail-list
            display :flex
            padding :0.1rem
            padding-top :.2rem
            justify-content :space-between
        .detail-list h4
            line-height :0.5rem
        .money
            display :inline-block
            font-size :0.24rem
            color:#ff9800
            .how-money
                font-size :0.5rem
                display :inline-block
                height :0.6rem
        .money i
            color :#ccc
    .children
        padding-left : 0.1rem
</style>