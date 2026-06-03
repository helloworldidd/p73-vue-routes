import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

import ProductView from '../views/ProductView.vue'

import DashboardView from '../views/DashboardView.vue'
import ProfileView from '../views/ProfileView.vue'
import ConfigurationView from '../views/ConfigurationView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const routes = [
    {
        path: '/',
        component: HomeView,
        alias: '/home'
    },
    {
        path: '/about',
        component: AboutView,
        meta: {
            transition: 'slide-left'
        }
    },
    {
        path: '/contact',
        component: ContactView,
        alias: [
            '/contacto',
            '/contact-us',
            '/contactanos',
            '/contactar'
        ],
        meta: {
            transition: 'fade-slow'
        }
    },
    {
        path: "/product/:id",
        component: ProductView,
        props: true
    },
    {
        path: "/dashboard",
        component: DashboardView,
        children: [
            {
                path: "profile",
                component: ProfileView
            },
            {
                path: "configuration",
                component: ConfigurationView
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundView
    },
    {
        path: "/inicio",
        redirect: "/"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

