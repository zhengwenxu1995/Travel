<template>
    <div class="cityHot">
        <div class="cityHot-title">
            热门城市
        </div>
        <ul class="hot-city-list">
            <li class="hot-city" v-for="item of cityList" :key="item.id">
                {{item.city}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"CityHot",
        data(){
            return {
                cityList:[
                    {
                        id:"001",
                        city:"北京"
                    },
                    {
                        id:"002",
                        city:"北京"
                    },
                    {
                        id:"003",
                        city:"北京"
                    },
                    {
                        id:"004",
                        city:"北京"
                    },
                    {
                        id:"005",
                        city:"北京"
                    },
                    {
                        id:"006",
                        city:"北京"
                    }
                ]
            }
        }
    }
   
</script>

<style lang="stylus" scoped>
    .cityHot-title
        padding :0.2rem 0.4rem
        background :#f5f5f5
    .hot-city-list
        overflow :hidden
        position :relative
    .hot-city-list ::before
        position :absolute
        content :""
        width :33.33%
        height :100%
        border-left :1px solid #ddd
        border-right :1px solid #ddd
        left :33.33%
    .hot-city
        float :left
        border-bottom :1px solid #ddd
        height :0.9rem
        line-height :0.9rem
        font-size :0.32rem
        width :33.33%
        zinde :10
        text-align :center
</style>