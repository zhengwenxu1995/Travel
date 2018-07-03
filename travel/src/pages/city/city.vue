<template>
<div>
    <city-header></city-header>
    <city-hot></city-hot>
    <city-letter></city-letter>
</div>
    
</template>

<script>
import CityHeader from "./components/cityHeader"
import CityHot from "./components/cityHot"
import CityLetter from "./components/CityLetter"
export default {
    name:"City",
    components:{
        CityHeader,
        CityHot,
        CityLetter
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="stylus" scoped >
    
</style>