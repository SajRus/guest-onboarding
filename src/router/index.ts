import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/', // 1. Welcome and 2FA
      name: 'home',
      component: WelcomeView,
    },
    {
      path: '/language', // 2. Language selection
      name: 'languare',
      component: () => import('../views/LangSelection.vue'),
    },
    {
      path: '/place', // 3. Home Place
      name: 'place',
      component: () => import('../views/Place.vue'),
    },
    {
      path: '/direction', // 4. Directions
      name: 'direction',
      component: () => import('../views/Direction.vue'),
    },
    {
      path: '/open-gare', // 5. Ring Bell & Open Gate
      name: 'gate',
      component: () => import('../views/BellAndGate.vue'),
    },
    {
      path: '/inside', // 6. Video Inside how to reach the appartment
      name: 'inside',
      component: () => import('../views/Inside.vue'),
    },
    {
      path: '/door', // 7. Open Dor instruction
      name: 'door',
      component: () => import('../views/OpenDoor.vue'),
    },
    {
      path: '/checkin', // 8. Checkin instruction and Documents send
      name: 'checkin',
      component: () => import('../views/Checkin.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
