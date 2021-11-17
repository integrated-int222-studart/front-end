import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Products from "../views/ProductsPage.vue";
// import Login from "../views/LoginPage.vue";
// import Register from "../views/RegisterPage.vue";
// import Profile from "../views/ProfilePage.vue";
// import ProductDetail from "../views/ProductDetail.vue";
// import NotFound from '../views/NotFoundPage.vue'
// import AddProduct from "../views/AddProduct.vue";
// import EditProduct from "../views/EditProduct.vue";
// import EditProfile from "../views/EditProfilePage.vue";
// import store from "../store/store";

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
    // beforeEnter: (to, from, next) => {
    //   if (localStorage.getItem("token")) {
    //     next();
    //   } else next("/login");
    // },
  },
  {
    path: "/register",
    name: "Register",
    // component: Register,
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/profile/:username",
    name: "Profile",
    component: () => import("../views/ProfilePage.vue"),
    // component: Profile,
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
    // component: EditProduct,
    // props: { edit_product: {} },
    // meta: { requiresAuth: true },
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
  // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // console.log(store);
//     let authenticated = store.getters["auth/isAuthenticated"];
//     // this.$store.getters['auth/getAuthenticated'];
//     console.log(authenticated);

//     if (!authenticated) {
//       next({
//         path: "/login",
//         // query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   // If doesn't require authentication, accept.
//   if (!to.meta.requiresAuth) {
//     return next();
//   }
//   // If require auth but user is not authenticated, go to login.
//   if (!store.getters.isAuthenticated) {
//     return next("/login");
//   }
//   // If user is authenticated and page doesn't define roles, accept.
//   if (!to.meta.roles) {
//     return next();
//   }
//   // If page defines roles, check if user type is included in the roles.
//   if (to.meta.roles.includes(store.getters.getCurrentUser.role)) {
//     return next();
//   }
//   // Otherwise, denied.
//   next("/");
// });

export default router;
