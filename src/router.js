import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';
import ProjectView from './views/ProjectView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import PageNotFoundView from './views/PageNotFoundView.vue';

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
            component: ProjectView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'pagenotfound',
            component: PageNotFoundView
        },
    ]
});
export { router };