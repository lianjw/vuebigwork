import HelloWorld from '@/components/HelloWorld'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'cart',
      component:()=>import('../page/cart.vue')
    },
    {
      path: '/',
      name: 'details',
      component:()=>import('../page/details/details.vue'),
      // children:[
      //   {
      //     path: '/header',
      //     name: 'header',
      //     component:()=>import('../page/details/header.vue'),
      //   }
      // ]
    },
    {
      path: '/index',
      name: 'index',
      component:()=>import('../page/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('../page/login.vue')
    },
    {
      path: '/order',
      name: 'order',
      component:()=>import('../page/order.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('../page/register.vue')
    },
  ]
})
