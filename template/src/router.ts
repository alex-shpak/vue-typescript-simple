import VueRouter, { RouteConfig } from 'vue-router';

import { List } from 'components';

const routes: [RouteConfig] = [
    {
        path: '/',
        component: List,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
