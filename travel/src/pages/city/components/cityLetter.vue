<template>
    <div class="cityLetter">
        <div class="cityLetter-title">
            字母排序
        </div>
        <ul class="letter-list">
            <li class="hot-city" v-for="item of cityList" :key="item.id">
                {{item.city}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"CityLetter",
        data(){
            return {
                cityList:[
                    {
                        id:"001",
                        city:"A"
                    },
                    {
                        id:"002",
                        city:"A"
                    },
                    {
                        id:"003",
                        city:"A"
                    },
                    {
                        id:"004",
                        city:"A"
                    },
                    {
                        id:"005",
                        city:"A"
                    },
                    {
                        id:"006",
                        city:"A"
                    },
                    {
                        id:"007",
                        city:"A"
                    }
                    ,{
                        id:"008",
                        city:"A"
                    }
                ]
            }
        }
    }
   
</script>

<style lang="stylus" scoped>
    .cityLetter-title
        padding :0.2rem 0.4rem
        background :#f5f5f5
    .letter-list
        overflow :hidden
    .hot-city
        float :left
        height :0.9rem
        line-height :0.9rem
        font-size :0.32rem
        width :16.66%
        zinde :10
        text-align :center
</style>