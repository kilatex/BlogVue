import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Form from '../views/Form.vue';
import Blog from '../views/Blog.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
