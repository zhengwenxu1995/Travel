export default {
        changeCity(state,city){
            state.city=city;
            try{
                localStorage.city=city;//有的浏览器 用户关闭  或者隐藏   使用 try catch
            }catch(e){
                console.log(e)
            } 
        }
}