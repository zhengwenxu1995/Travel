import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import ChangeCity from "./mutations"
Vue.use(Vuex)

export default new Vuex.Store({
        state,
        // actions:{   可以省略
        //     changeCity(ctx,city){
        //         ctx.commit("changeCity",city)
        //     }
        // },
        mutations:ChangeCity,
        getters:{
            cityGroup(state){
                return state.city+ " "+state.city;
            }
        }
        //Getter  类似计算属性 有返回值
       // module  当有多个 store的时候使用
    }
) 