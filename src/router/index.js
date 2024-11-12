import { createRouter, createWebHistory } from "vue-router";
import { DefaultLayout, BlankLayout } from "@layouts/index.js";
import {
  Home,
  Recently,
  Products,
  ProductDetails,
  Login,
  Signup,
  ResetPassword,
  ForgotPassword,
  Profile,
  Cart,
  NotFound,
  PrivacyPolicy,
  TermsAndConditions,
} from "@pages/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/recently",
    name: "Recently",
    component: Recently,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/products/:category",
    children: [
      {
        path: "", // empty path for the parent route
        name: "Products",
        component: Products,
        props: true,
        meta: {
          layout: DefaultLayout,
        },
      },
      {
        path: ":product_id",
        name: "ProductDetail",
        component: ProductDetails,
        props: true,
        meta: {
          layout: DefaultLayout,
        },
      },
    ],
  },
  // Authenticated routes
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      layout: DefaultLayout,
    },
  },
  // Policies
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/statements",
    name: "Statements",
    component: TermsAndConditions,
    meta: {
      layout: DefaultLayout,
    },
  },
  // Mislaneous
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      layout: BlankLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  // const auth = useAuth();

  // if (to.meta.requiresAuth && !auth.user) {
  //   next("/login");
  //   return;
  // }

  // if (to.meta.roles && !to.meta.roles.includes(auth.user?.role_id)) {
  //   next("/");
  //   return;
  // }

  next();
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
