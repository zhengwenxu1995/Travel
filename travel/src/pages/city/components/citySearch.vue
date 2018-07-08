<template>
    <div class="search">
        <div class="search-box">
            <input type="text" class="search-cont" placeholder="输入城市名或拼音" v-model="wordKey">
        </div>
        <div class="seach-bear wrapper" v-show="wordKey">
            <ul>
                <li class="seach-item border-bottom" v-for="item of searchCity" :key="item.id" @click="handleCityClick(item.city)">
                    {{item.city}}
                </li>
                <li class="seach-item border-bottom" v-show="hasCityList">没有找到您要搜索城市</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:"CitySearch",
    props:{
        cities:Object
    },
    data(){
        return{
            wordKey:'',
            searchCity:[],
            timer:null
        }
    },
    watch:{
        wordKey(){
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(this.searchCity){
                this.searchCity=[];
            }
            
            this.timer=setTimeout(()=>{
                for(let i in this.cities){
                this.cities[i].forEach( (item,index)=>{
                    if(item.name.indexOf(this.wordKey)>-1 || item.spell.indexOf(this.wordKey)>-1){
                        this.searchCity.push({
                            city:item.name,
                            id:item.id
                        });
                    }
                });
            }
            if(this.wordKey==""){
                this.searchCity=[];
            }
            },200);
            return this.searchCity;
        }
    },
    methods:{
        handleCityClick(city){
                // this.$store.dispatch("changeCity",city);
                this.$store.commit("changeCity",city);
                this.$router.push("/");
        }
    },
    computed:{
        hasCityList(){
            return !this.searchCity.length;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~style/varibles.styl";
    .search-box
        box-sizing :border-box
        padding : 0.1rem 0.2rem
        .search-cont
            box-sizing :border-box
            width :100%
            border-radius :0.1rem
            text-align :center
            border :0.03rem solid #eee
            color :$textColor
            background :#fff
            padding : .06rem
            font-size :0.25rem
    .seach-bear
        overflow :hidden
        position :absolute
        top :2.2rem
        width :100%
        bottom :0
        left :0
        z-index :20
        background :#fff
        .seach-item
            padding : 0.2rem .1rem
</style>