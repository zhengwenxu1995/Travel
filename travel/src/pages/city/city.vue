<template>
<div>
    <city-header ></city-header>
    <city-list :hotCities="hotCities" :cities="cities" :letters="letters"></city-list>
    <alphabet :cities="cities" @changeScroll="changePlace"></alphabet>
</div>
    
</template>

<script>
import CityHeader from "./components/cityHeader"
import CityList from "./components/cityList"
import axios from "axios"
import Alphabet from "./components/Alphabet"
export default {
    name:"City",
    components:{
        CityHeader,
        CityList,
        Alphabet
    },
    data(){
        return {
            hotCities:[],
            cities:{},
            letters:""
        }
    },
    methods:{
        changePlace(val){
            this.letters=val;
        },
        getCityInfo(){
            axios.get("/api/city.json").then(this.succesCityInfo)
        },
        succesCityInfo(res){
             res=res.data;
            if(res.data && res.ret){
                const data=res.data;
                this.cities=data.cities;
                this.hotCities=data.hotCities;
            }
        }
    },
    mounted(){
       this.getCityInfo();
            
    }
}
</script>

<style lang="stylus" scoped >
    
</style>