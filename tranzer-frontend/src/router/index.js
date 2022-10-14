import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/UserRequestTrip.vue'),
  },
  {
    path: '/viewtrip',
    name: 'viewtrip',
    component: () => import('../views/DisplayTicket.vue'),
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/paymentInfo.vue'),
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import('../views/TicketInformation.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
