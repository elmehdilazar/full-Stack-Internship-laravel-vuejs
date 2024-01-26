import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProductViewVue from '@/views/AddProductView.vue'
import UpdateProductVue from '@/views/UpdateProduct.vue'
import SignInVue from '@/views/SignIn.vue'
import SignUpVue from '@/views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProduct',
    name: 'addproduct',
    component:AddProductViewVue
  },
  {
    path: '/updateProduct/:idprod',
    name: 'UpdateProduct',
    component:UpdateProductVue
  },
  {
    path: '/sign',
    name: 'signin',
    component:SignInVue
  },
  {
    path: '/signup',
    name: 'signup',
    component:SignUpVue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
