import Chatroom from '@/views/Chatroom.vue'
import Welcome from '@/views/Welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },

  {
    path:'/chatroom',
    name:'chatroom',
    component:Chatroom
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
