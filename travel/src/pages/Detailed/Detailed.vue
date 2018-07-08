<template>
    <div>
        <detailed-banner></detailed-banner>
       
    </div>
</template>

<script>
import DetailedBanner from "./components/DetailedBanner"

export default {
    name:"Detailed",
    components:{
        DetailedBanner
    }
}
</script>

<style lang="stylus" scoped>
.swiper
    overflow hidden
    width :100%
    height :0
    padding-bottom :31.25%
    .img-swiper 
        width: 100%;
</style>