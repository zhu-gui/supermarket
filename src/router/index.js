import Vue from 'vue'
import VueRouter from 'vue-router'
//1安装插件
Vue.use(VueRouter)
//2.创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:()=>import('../views/home/Home')
  },
  {
    path: '/category',
    component:()=>import('../views/category/Category')
  },
  {
    path: '/cart',
    component:()=>import('../views/cart/Cart')
  },
  {
    path: '/profile',
    component:()=>import('../views/profile/Profile')
  },
]
const router = new VueRouter({
  routes,
  mode:'history',
})
//3.导出router
export default router
