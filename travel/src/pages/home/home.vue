<template>
    <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icon :iconList="iconList"></home-icon>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-week :weekendList="weekendList"></home-week>
    </div>
</template>

<script>
import homeHeader from "./components/homeHeader"
import homeSwiper from "./components/swiper"
import homeIcon from "./components/homeIcon"
import homeRecommend from "./components/homeRecommend"
import homeWeek from "./components/homeWeek"
import { mapState } from "vuex"
import axios from "axios"
    export default {
        name:"Home",//组件名字,
        data(){
            return {
                lastCity:"",
                iconList:[],
                recommendList:[],
                swiperList:[],
                weekendList:[]
            }
        },
        methods:{
            homeInfo(){
                axios.get("/api/index.json?city="+this.city).then(this.succesInfo)
            },
            succesInfo(res){
                res=res.data;
                const data=res.data;
                if(res.data && res.ret){
                    this.iconList=data.iconList;
                    this.recommendList=data.recommendList;
                    this.swiperList=data.swiperList;
                    this.weekendList=data.weekendList;
                }
            }
        },
        components:{
             homeHeader,
             homeSwiper,
             homeIcon,
             homeRecommend,
             homeWeek,
        },
        computed:{
            ...mapState(["city"])
        },
        mounted(){
            this.lastCity=this.city
            this.homeInfo();
        },
       activated(){
           if(this.lastCity !=this.city){
               this.lastCity=this.city
               this.homeInfo();
           }
       }
    }
</script>
<style>

</style>