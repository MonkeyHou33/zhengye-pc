import Vue from 'vue'
import VueRouter from 'vue-router'

//1.创建路由组件
import home from '../views/home'

Vue.use(VueRouter)

const routes = [
  //主路由
  {
    path:'/home',component:home,
    // redirect:'/home',//重定向
  },
]

const router = new VueRouter({
  routes
})

//4.将router实例暴露
export default router