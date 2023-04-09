import { createRouter, createWebHistory } from 'vue-router'
import WhoAmIView from '../views/WhoAmIView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WhoAmIView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    }
    ,
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import('../views/TechnologyView.vue')
    }
  ]
})

export default router