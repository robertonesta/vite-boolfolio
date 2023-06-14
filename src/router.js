import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';
import projectView from './views/projectView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: projectView
        },
    ]
});
export { router };