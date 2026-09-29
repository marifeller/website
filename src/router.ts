import { createRouter, createWebHistory } from 'vue-router'

import ScreenHome from './ScreenHome.vue'
import ScreenResume from './ScreenResume.vue'

const routes = [
  { path: '/', component: ScreenHome },
  { path: '/resume', component: ScreenResume },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
