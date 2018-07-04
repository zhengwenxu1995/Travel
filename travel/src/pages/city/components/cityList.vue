<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="now-city">
            <div class="title border-topbottom">
                您的位置
            </div>
            <div class="now-list">
                <div class="button">
                    <div class="button-cont">
                        北京
                    </div>
                </div>
            </div>
        </div>
        <div class="hot-city">
            <div class="title border-topbottom">
                热门城市
            </div>
            <ul class="hot-list">
                <li class="hot-cont" v-for="item of hotCities" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="sort-list">
            <div class="title border-topbottom">
                字母排序
            </div>
            <ul class="sort-cont">
                <li class="sort-item" v-for="(item,key) of cities" :key="key" @click="change">
                    {{key}}
                </li>
            </ul>
        </div>
        <div class="letters-list" v-for="(item,key) of cities" :key="key" :ref="key">
            <div class="title border-topbottom">
                {{key}}
            </div>
            <ul class="letters-cont">
                <li class="letters-item" v-for="cont of item" :key="cont.id">
                    {{cont.name}}
                </li> 
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:"CityList",
        props:{
            hotCities:Array,
            cities:Object,
            letters:String
        },
        data(){
            return {
                letter:""
            }
        },
        mounted(){
            this.scroll= new BScroll(this.$refs.wrapper);
        },
        methods:{
            change(e){
                this.letter=e.srcElement.innerText;
            }
        },
        watch:{
            letter(){
                if(this.letter){
                    const element=this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element);
                }
            },
            letters(){
                if(this.letters){
                    const element=this.$refs[this.letters][0];
                    this.scroll.scrollToElement(element);
                }
            }
        }
    }
   
</script>

<style lang="stylus" scoped>
.city-list
    width :100%
    position :absolute
    top :1.5rem
    left :0
    bottom :0
    overflow :hidden
    .border-topbottom
     &::before
        border-color :#ccc
     &::after
        border-color :#ccc
    .title
        padding-left :.2rem
        background :#eee
        color :#666
        font-size :0.26rem
        line-height :0.7rem
    .now-list
        padding :.1rem
        overflow :hidden
        .button
            float :left
            width :33.33%
            .button-cont
                text-align :center
                margin :0.1rem
                padding :0.1rem 0
                border-radius :0.06rem
                border :0.02rem solid #ccc
    .hot-list
        overflow :hidden
        position :relative
    .hot-list:before
        content :""
        width :33.33%
        position :absolute
        height :100%
        width :33.33%
        left :33.33%
        top :0px
        border-left :1px solid #ccc
        border-right :1px solid #ccc
    .hot-cont
        box-sizing :border-box
        border-bottom :1px solid #ccc
        float :left
        width :33.33%
        text-align :center
        line-height :0.8rem
    .sort-cont
        overflow :hidden
        .sort-item
            float :left
            width :16.66%
            text-align :center
            line-height :0.9rem
            height :0.9rem
            zindex :10
            font-size :0.28rem
    
    .letters-cont
        overflow :hidden
        position :relative
    .letters-cont:before
        content :""
        width :25%
        height :100%
        position absolute
        left :25%
        border-left :.02rem solid #ccc
        border-right :.02rem solid #ccc
    .letters-cont:after
        content :""
        width :25%
        height :100%
        position absolute
        right :25%
        border-right :.02rem solid #ccc
    .letters-item
        float :left
        width :25%
        height :.9rem
        line-height :.9rem
        border-bottom :0.02rem solid #ccc
        text-align :center
</style>