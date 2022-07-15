import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Login',
        meta: { layout: 'VLogin' },
        component: () => import('../views/Login.vue')
    },
    {
        path: '/tickets',
        name: 'Tickets',
        meta: { layout: 'VIndex' },
        component: () => import('../views/Tickets.vue')
    },
    {
        path: '/ticket',
        name: 'TicketDetail',
        meta: { layout: 'VIndex' },
        component: () => import('../views/TicketDetail.vue')
    },
    {
        path: '/ticket/:id',
        name: 'TicketDetail',
        meta: { layout: 'VIndex' },
        component: () => import('../views/TicketDetail.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
