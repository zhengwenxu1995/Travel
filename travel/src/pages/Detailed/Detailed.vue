<template>
    <div>
        <detailed-banner :sightName="this.sightName" :bannerImg="this.bannerImg" :gallaryImgs="this.gallaryImgs"></detailed-banner>
        <header-detailed :sightName="this.sightName"></header-detailed>
        <div >
            <detailed-list :list="this.categoryList"></detailed-list>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import DetailedBanner from "./components/DetailedBanner"
import HeaderDetailed from "./components/headerDetailed"
import DetailedList from "./components/DetailedList"
export default {
    name:"Detailed",
    components:{
        DetailedBanner,
        HeaderDetailed,
        DetailedList
    },
    data(){
        return {
            sightName:"",
            bannerImg:"",
            categoryList:[],
            gallaryImgs:[],

        }
    },
    methods:{
        detailedInOf(){
           //方法一 axios.get("/api/detail.json?id="+this.$route.params.id)
           //方法二
           axios.get("/api/detail.json",{
                params:{
                    id:this.$route.params.id
                }
           }).then(this.handleGetDataSucc);
        },
        handleGetDataSucc(res){
            console.log(res);
            const rel=res.data;
            if(rel.ret && rel.data){
                const data=rel.data;
                this.sightName=data.sightName;
                this.bannerImg=data.bannerImg;
                this.categoryList=data.categoryList;
                this.gallaryImgs=data.gallaryImgs;
                
            }
            
        }
    },
    mounted(){
        this.detailedInOf();
    }
}
</script>

<style lang="stylus" scoped>
</style>