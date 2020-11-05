import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Memos from '../views/Memos.vue'
import Memo from '../views/Memo.vue' 
import EditMemo from '../views/EditMemo.vue' // 追加


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
  {
    path: '/memos/:id',
    name: 'show-memo',
    componemt: Memo,
    params: true
  },
  {
    path: '/memos/:id/edit', // 追加
    name: 'edit-memo',
    componemt: EditMemo,
    params: true
  }
]

const router = new VueRouter({
  routes
})

export default router
