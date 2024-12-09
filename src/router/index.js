import { createRouter, createWebHistory } from 'vue-router';
import About from '../page/About.vue';
import Basket from '../page/Basket.vue';
import Catalog from '../page/Catalog.vue';
import HomePage from '../page/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
