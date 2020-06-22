import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: { name: 'Home' } },
  {
    path: '/',
    name: 'Home',
    alias: ['/Home'],
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',

    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/Registro',
    name: 'Registro',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
