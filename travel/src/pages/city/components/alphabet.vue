<template>
    <ul class="sort-list" >
        <li class="sort-cont"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleLetterClick"
        @click="handlerChange"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name:"Alphabet",
    data(){
        return {
            tuchDrag:false,
            startY:0
        }
    },
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters=[];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop;
    },
    methods:{
        handlerChange(e){
            const val=e.srcElement.innerText; 
            this.$emit("changeScroll",val)
        },
        handleTouchStart(){
            this.tuchDrag=true;
        },
        handleTouchMove(e){
        if(this.tuchDrag){
            if(this.timer){
                clearTimeout(this.timer);
            }
            this.timer=setTimeout(()=>{
                    let touchY=e.touches[0].clientY-75;
                    let touchIndex=Math.floor((touchY-this.startY)/21.3);
                        if(touchIndex>=22){
                            touchIndex=21
                        }
                    this.$emit("changeScroll",this.letters[touchIndex]);
                },20);          
            }
            
        },
        handleLetterClick(){
            this.tuchDrag=false;
        }
    },

}
</script>

<style lang="stylus" scoped>
@import "~style/varibles.styl";
    .sort-list
        box-sizing :border-box
        height :85%
        display :flex
        justify-content :center
        align-items :center
        flex-direction :column
        color :$bgColor
        position :fixed
        right :0
        top:1.5rem
        .sort-cont
            padding : 0.08rem
</style>