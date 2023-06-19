import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Why_are_we from '../components/WhyAreWe.vue'
import Services from '../components/OurServices.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },
    {
      path: '/Why_are_we',
      name: 'Whyarewe',
      component: Why_are_we
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
  ],
})

export default router
