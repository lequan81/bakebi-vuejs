import { HSStaticMethods } from "preline";
import { createRouter, createWebHistory } from "vue-router";
import { DefaultLayout, BlankLayout } from "@layouts/index.js";
import { Home } from "@pages/index.js";

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
    path: "/products/:category",
    children: [
      {
        path: "", // empty path for the parent route
        name: "Products",
        component: () =>
          import("@pages/index.js").then((pages) => pages.Products),
        props: (route) => ({
          category: route.params.category,
          page: parseInt(route.query.page) || 1,
        }),
        meta: {
          layout: DefaultLayout,
        },
      },
      {
        path: ":product_id",
        name: "ProductDetail",
        component: () =>
          import("@pages/index.js").then((pages) => pages.ProductDetails),
        props: true,
        meta: {
          layout: DefaultLayout,
        },
      },
    ],
  },
  {
    path: "/recently",
    name: "Recently",
    component: () => import("@pages/index.js").then((pages) => pages.Recently),
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
    }),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/trending",
    name: "Trending",
    component: () => import("@pages/index.js").then((pages) => pages.Trending),
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
    }),
    meta: {
      layout: DefaultLayout,
    },
  },

  // Authenticated routes
  {
    path: "/login",
    name: "Login",
    component: () => import("@pages/index.js").then((pages) => pages.Login),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@pages/index.js").then((pages) => pages.Signup),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import("@pages/index.js").then((pages) => pages.ResetPassword),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () =>
      import("@pages/index.js").then((pages) => pages.ForgotPassword),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@pages/index.js").then((pages) => pages.Profile),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@pages/index.js").then((pages) => pages.Cart),
    meta: {
      layout: DefaultLayout,
    },
  },
  // Policies
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () =>
      import("@pages/index.js").then((pages) => pages.PrivacyPolicy),
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/statements",
    name: "Statements",
    component: () =>
      import("@pages/index.js").then((pages) => pages.TermsAndConditions),
    meta: {
      layout: DefaultLayout,
    },
  },
  // Mislaneous
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@pages/index.js").then((pages) => pages.NotFound),
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
      HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
