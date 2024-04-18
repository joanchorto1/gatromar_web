import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import CateringView from "@/views/CateringView.vue";
import CartaView from "@/views/CartaView.vue";
import BlogView from "@/views/BlogView.vue";
import GaleriaView from "@/views/GaleriaView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nosotros',
      name: 'about',
      component: AboutView
    },
    {
      path: '/catering',
      name: 'catering',
      component: CateringView
    },
    {
      path: '/carta',
      name: 'carta',
      component: CartaView
    },
    { path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: GaleriaView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
