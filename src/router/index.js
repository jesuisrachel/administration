import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'
import HelloWorld from '@/page/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BasicLayout,
      redirect:'/home',
      children:[{
        path: '/home',
        component: HelloWorld,
      },{
        path: '/album',
      },{
        path: '/blog',
      }]
    }
  ]
})
