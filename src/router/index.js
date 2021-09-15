import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/ProductsPage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import Profile from '../views/ProfilePage.vue'
import ProductDetail from '../views/ProductDetail.vue'
// import NotFound from '../views/NotFoundPage.vue'
import AddProduct from '../views/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    // children: [
    //   {
    //     path: ':id',
    //     component: ProductDetail
    //   }
    // ]
  },
  {
    path: '/productdetail/:id',
    name: 'Productdetail',
    component: ProductDetail,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
