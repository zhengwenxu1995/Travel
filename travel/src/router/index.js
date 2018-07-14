import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/home.vue"
import City from "@/pages/city/city.vue"
import Detailed from "@/pages/Detailed/Detailed"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',//给路由项起名字
      component: Home//显示的组件
    }
    ,{
      path: '/city',
      name: 'City',//给路由项起名字
      component: City//显示的组件
    },{
      path: '/Detailed/:id',
      name: 'Detailed',//给路由项起名字
      component: Detailed//显示的组件
    }
  ],    
  mode:"history",
  scrollBehavior (to, from, savedPosition) {  //解决页面滚动切换后的位置问题
    return { x: 0, y: 0 }
  }
})
