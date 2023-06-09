import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import PostView from '../views/post-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about-view.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostView
    },
    {
      path: '/post-item',
      name: 'post-item',
      component: PostView
    }
  ]
})

export default router
