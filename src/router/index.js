import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Memos from '../views/Memos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/memos',
    name: 'memos',
    component: Memos
  },
]

const router = new VueRouter({
  routes
})

export default router
