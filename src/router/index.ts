import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import SchoolsView from '@/views/SchoolsView.vue'
import SchoolView from '@/views/SchoolView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/schools',
      name: 'schools',
      component: SchoolsView,
    },
    {
      path: '/schools/:schoolId',
      name: 'school',
      component: SchoolView
    }
  ],
  linkActiveClass: 'bg-primary-dark',
  linkExactActiveClass: 'bg-primary-dark border-r-5 border-green-600 hover:bg-primary-dark!',
})

export default router
