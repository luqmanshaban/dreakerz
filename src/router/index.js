import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
if(localStorage.getItem('token'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next();
 } 
 else
 {
  next('/login');
 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'about',
      component: () => import('../views/ProductView.vue') 
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/AdminView.vue')
    },
    {
      path: '/user',
      name: 'user',
      beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/UserView.vue')
    },
    {
      path: '/admin/users',
      name: 'users',
      beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/admin/UsersView.vue')
    },
    {
      path: '/admin/profile',
      name: 'admin-profile',
      beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/admin/ProfileView.vue')
    },
    {
      path: '/admin/product',
      name: 'admin-product',
      beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/admin/ProductView.vue')
    },
  ]
})

export default router
