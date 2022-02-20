import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Form from '../views/Form.vue';
import About from '../views/About.vue';
import ArticleDetail from '../views/ArticleDetail.vue';
import Page from '../views/Page.vue';
import ErrorView from '../views/ErrorView.vue';


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
    path: '/about',
    name: 'About',
    component: About
  }, 
  {
    path: '/article-detail',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/page/:id?',
    name: 'Page',
    component: Page
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: ErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
