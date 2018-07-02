import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/home.vue"
// import List from "@/pages/list/list"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',//给路由项起名字
      component: Home//显示的组件
    }
  ],
  mode:"history"
})
