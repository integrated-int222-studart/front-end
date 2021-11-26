import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/ProductsPage.vue"),
  },
  {
    path: "/productdetail/:id",
    name: "Productdetail",
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",

    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/profile/:username",
    name: "Profile",
    component: () => import("../views/ProfilePage.vue"),
  },
  {
    path: "/profile/:username/editprofile",
    name: "EditProfile",
    component: () => import("../views/EditProfilePage.vue"),
  },
  {
    path: "/addproduct",
    name: "AddProduct",
    meta: { requiresAuth: true },
    component: () => import("../views/AddProduct.vue"),
  },
  {
    path: "/edit-product/:prod_id",
    name: "EditProduct",
    component: () => import("../views/EditProduct.vue"),
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () => import("../views/adminPage/adminLoginPage.vue"),
  },

  {
    path: "/admin/adminApprovePage",
    name: "AdminApprovePage",
    component: () => import("../views/adminPage/adminApprovePage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
