import { createRouter, createWebHashHistory } from 'vue-router'
import CombateView from '@/views/CombateView.vue'
import PersonajesView from '@/views/PersonajesView.vue'
import EscenariosView from '@/views/EscenariosView.vue'

const routes = [
  {
    path: '/',
    name: 'personajes',
    component: PersonajesView
  },
  {
    path: '/combate',
    name: 'combate',
    component: CombateView
  },
  {
    path: '/escenarios',
    name: 'escenarios',
    component: EscenariosView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
