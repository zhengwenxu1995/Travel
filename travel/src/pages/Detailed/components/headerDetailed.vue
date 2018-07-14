<template>
    <div class="header" >
        <router-link v-show="showHeader" tag="div" to="/" class="back-per">
            <span class="iconfont back-cont">&#xe602;</span>
        </router-link>
       <div class="header-title" v-show="!showHeader" :style="showOpacity">
           <div class="header-back">
               <span class="iconfont back-cont">&#xe602;</span>
           </div>
           <div class="title-cont">
              {{this.sightName}}
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name :"HeaderDetailed",
    props:{
        sightName:String
    },
    data(){
        return {
            showHeader:true,
            showOpacity:{
                opacity:0
            }
        }
    },
    methods:{
        handleShowHeader(){
            const showDis=document.documentElement.scrollTop;
            if(showDis>40){
                let fadeIn=showDis/120
                fadeIn= fadeIn > 1 ? 1 : fadeIn
                    this.showOpacity ={
                        opacity:fadeIn
                    }
                this.showHeader=false
            }else{
                this.showHeader=true
            }
            // console.log(document.documentElement.scrollTop)
        }
    },
    activated(){
        window.addEventListener("scroll",this.handleShowHeader);
    }
}
</script>

<style lang="stylus" scoped>
@import "~style/varibles.styl"
.header
    position :absolute
    top :0
    left :0
    z-index :88
    width :100%
    .back-per
        z-index :82
        position :absolute
        top :0.1rem
        left :0.1rem
        background :rgba(0,0,0,0.5)
        color :#fff
        padding :0.2rem
        text-align :center
        border-radius :50%
        .back-cont
            line-height :.3rem
    .header-title
        position :fixed
        top :0
        left :0
        background :$bgColor
        height :0.85rem
        width :100%
        display :flex
        color :#fff
        .header-back
            padding-left :0.1rem
            line-height :0.85rem
            font-size :0.5rem
        .title-cont
            width :100%
            line-height :0.85rem
            text-align :center
</style>