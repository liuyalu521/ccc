import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index', //关注
      component: (resolve) => require(['../components/index'], resolve),
    },
    {
      path: '/my', //关注
      component: (resolve) => require(['../components/my'], resolve),
    },
    //路径调用
    {
      path: '*',
      redirect: '/index',
    }
  ]
})
