import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Dashboard from '../views/Dashboard.vue'
import Proposals from '../views/Proposals.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
    },
    {
      name: 'proposals',
      path: '/proposals',
      component: Proposals,
    },
  ]
})