import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import store from '../stores/index.js'

// function guardMyroute(to, from, next) {
// //  var isUser = false
// // if(localStorage.getItem('token'))
// //   isAuthenticated = true;
// //  else
// //   isAuthenticated= false;
// //  if(isAuthenticated) 
// //  {
// //   next();
// //  } 
// //  else
// //  {
// //   next('/login');
// //  }

//     const isLoggedIn = store.state.isLoggedIn;
//     const isAdmin = store.state.isAdmin;
//     const isUser = store.state.isUser;

//     const adminCondition = isLoggedIn && (to.name.startsWith('admin-') || to.name === 'admin' && isAdmin);

//     const userCondition = isLoggedIn && (to.name.startsWith('user-') || to.name === 'user' && isUser);

    
//     if (adminCondition) {
//       next();
//     } 
//     else if (userCondition) {
//       next();
//     }
//     else if (!isLoggedIn) {
//       next('/login');
//     } 
//     else {
//       next('/');
//     }
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue') 
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue') 
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
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/AdminView.vue')
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/admin/UsersView.vue')
    },
    {
      path: '/admin/profile',
      name: 'admin-profile',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/admin/ProfileView.vue')
    },
    {
      path: '/admin/orders',
      name: 'admin-orders',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/admin/OrdersView.vue')
    },
    {
      path: '/admin/product',
      name: 'admin-product',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/admin/ProductView.vue')
    },
    
    //normal user
    {
      path: '/user',
      name: 'user',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/UserView.vue')
    },
    {
      path: '/user/product',
      name: 'user-product',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/user/ProductView.vue')
    },
    {
      path: '/user/profile',
      name: 'user-profile',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/user/ProfileView.vue')
    },
    {
      path: '/user/orders',
      name: 'user-orders',
      // beforeEnter: guardMyroute,
      component: () => import('../views/dashboard/user/OrdersView.vue')
    },
  ]
})

export default router
