import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Form from '../views/Form.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'about' },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
