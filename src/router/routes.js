import store from "@/state/store";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
          next();
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: {
      title: "Register",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/ecommerce/index.vue"),
  },
  // New Pages Under the dashboard
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/index"),
  },
  {
    path: "/templates",
    name: "templates",
    meta: {
      title: "Shortened Links",
      authRequired: true,
    },
    component: () => import("../views/templates/index"),
  },
  {
    path: "/assistant",
    name: "assistant",
    meta: {
      title: "File Links",
      authRequired: true,
    },
    component: () => import("../views/assistant/index"),
  },
  {
    path: "/speech-to-text",
    name: "speech-to-text",
    meta: {
      title: "VCard Links",
      authRequired: true,
    },
    component: () => import("../views/speech-to-text/index"),
  },
  {
    path: "/landing-pages",
    name: "landing-pages",
    meta: {
      title: "Event Links",
      authRequired: true,
    },
    component: () => import("../views/landing-pages/index"),
  },
  {
    path: "/action-pages",
    name: "action-pages",
    meta: {
      title: "Static Sites",
      authRequired: true,
    },
    component: () => import("../views/action-pages/index"),
  },
  {
    path: "/hosting",
    name: "hosting",
    meta: {
      title: "Static Sites",
      authRequired: true,
    },
    component: () => import("../views/hosting/index"),
  },
  // New Pages Under the Dashboard End
  {
    path: "/dashboard/crypto",
    name: "dashboard-crypto",
    meta: {
      title: "Crypto",
      authRequired: true,
    },
    component: () => import("../views/dashboard/crypto/index"),
  },
  {
    path: "/dashboard/projects",
    name: "dashboard-projects",
    meta: {
      title: "Projects",
      authRequired: true,
    },
    component: () => import("../views/dashboard/projects/index"),
  },
  {
    path: "/dashboard/crm",
    name: "dashboard-crm",
    meta: {
      title: "CRM",
      authRequired: true,
    },
    component: () => import("../views/dashboard/crm/index"),
  },
  {
    path: "/dashboard/analytics",
    name: "dashboard-analytics",
    meta: {
      title: "Analytics",
      authRequired: true,
    },
    component: () => import("../views/dashboard/analytics/index"),
  },
  {
    path: "/dashboard/nft",
    name: "dashboard-nft",
    meta: {
      title: "NFT Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/nft/index"),
  },
  {
    path: "/dashboard/job",
    name: "dashboard-job",
    meta: {
      title: "Job Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/job/index"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout",
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        localStorage.clear();
        sessionStorage.clear();
        next();
      },
    },
    component: () => import("../views/auth/logout/basic"),
  },
  // AI Pages Start From Here
  {
    path: "/qr-code",
    name: "qr-code",
    meta: {
      title: "QR Code",
      authRequired: true,
    },
    component: () => import("../views/qr-code/index"),
  },
  {
    path: "/other-tools",
    name: "other-tools",
    meta: {
      title: "Other tools",
      authRequired: true,
    },
    component: () => import("../views/other-tools/index"),
  },

  {
    path: "/file-manager",
    name: "File Manager",
    meta: { title: "File Manager", authRequired: true },
    component: () => import("../views/file-manager/index"),
  },
  {
    path: "/event-link",
    name: "Tools",
    meta: { title: "Tools", authRequired: true },
    component: () => import("../views/event-link/index"),
  },
  {
    path: "/payments",
    name: "Payments",
    meta: { title: "Payments", authRequired: true },
    component: () => import("../views/payments/index"),
  },
  {
    path: "/projects",
    name: "projects",
    meta: {
      title: "Projects",
      authRequired: true,
    },
    component: () => import("../views/projects/index"),
  },
  {
    path: "/data",
    name: "data",
    meta: {
      title: "Data",
      authRequired: true,
    },
    component: () => import("../views/data/index"),
  },
  // Others Pages End Here
  {
    path: "/pages/starter",
    name: "starter",
    meta: { title: "Starter", authRequired: true },
    component: () => import("../views/pages/starter"),
  },
  {
    path: "/pages/profile",
    name: "profile",
    meta: { title: "Profile", authRequired: true },
    component: () => import("../views/pages/profile/simple"),
  },
  {
    path: "/pages/profile-setting",
    name: "profile-setting",
    meta: { title: "Setting", authRequired: true },
    component: () => import("../views/pages/profile/setting"),
  },
  {
    path: "/pages/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: true },
    component: () => import("../views/pages/maintenance"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: true },
    component: () => import("../views/pages/coming-soon"),
  },
  {
    path: "/pages/timeline",
    name: "timeline",
    meta: { title: "Timeline", authRequired: true },
    component: () => import("../views/pages/timeline"),
  },
  {
    path: "/pages/faqs",
    name: "FAQs",
    meta: { title: "FAQs", authRequired: true },
    component: () => import("../views/pages/faqs"),
  },
  {
    path: "/pages/pricing",
    name: "pricing",
    meta: { title: "Pricing", authRequired: true },
    component: () => import("../views/pages/pricing"),
  },
  {
    path: "/pages/team",
    name: "team",
    meta: { title: "Team", authRequired: true },
    component: () => import("../views/pages/team"),
  },
  {
    path: "/pages/search-results",
    name: "search-results",
    meta: { title: "Search Results", authRequired: true },
    component: () => import("../views/pages/search-results"),
  },
  {
    path: "/pages/sitemap",
    name: "sitemap",
    meta: { title: "Sitemap", authRequired: true },
    component: () => import("../views/pages/sitemap"),
  },
  {
    path: "/pages/privacy-policy",
    name: "privacy-policy",
    meta: { title: "Privacy Policy", authRequired: true },
    component: () => import("../views/pages/privacy-policy"),
  },
  {
    path: "/pages/term-conditions",
    name: "term-conditions",
    meta: { title: "Term Conditions", authRequired: true },
    component: () => import("../views/pages/term-conditions"),
  },
  {
    path: "/auth/signin-basic",
    name: "signin-basic",
    meta: {
      title: "Signin Basic",
      authRequired: true,
    },
    component: () => import("../views/auth/signin/basic"),
  },
  {
    path: "/auth/signin-cover",
    name: "signin-cover",
    meta: {
      title: "Signin Cover",
      authRequired: true,
    },
    component: () => import("../views/auth/signin/cover"),
  },
  {
    path: "/auth/signup-basic",
    name: "signup-basic",
    meta: {
      title: "Signup Basic",
      authRequired: true,
    },
    component: () => import("../views/auth/signup/basic"),
  },
  {
    path: "/auth/signup-cover",
    name: "signup-cover",
    meta: {
      title: "Signup Cover",
      authRequired: true,
    },
    component: () => import("../views/auth/signup/cover"),
  },
  {
    path: "/auth/reset-pwd-basic",
    name: "reset-pwd-basic",
    meta: {
      title: "Reset Password",
      authRequired: true,
    },
    component: () => import("../views/auth/reset/basic"),
  },
  {
    path: "/auth/reset-pwd-cover",
    name: "reset-pwd-cover",
    meta: {
      title: "Reset Password",
      authRequired: true,
    },
    component: () => import("../views/auth/reset/cover"),
  },
  {
    path: "/auth/create-pwd-basic",
    name: "create-pwd-basic",
    meta: {
      title: "create Password",
      authRequired: true,
    },
    component: () => import("../views/auth/create/basic"),
  },
  {
    path: "/auth/create-pwd-cover",
    name: "create-pwd-cover",
    meta: {
      title: "create Password",
      authRequired: true,
    },
    component: () => import("../views/auth/create/cover"),
  },
  {
    path: "/auth/lockscreen-basic",
    name: "lock-screen-basic",
    meta: {
      title: "Lock Screen",
      authRequired: true,
    },
    component: () => import("../views/auth/lockscreen/basic"),
  },
  {
    path: "/auth/lockscreen-cover",
    name: "lock-screen-cover",
    meta: {
      title: "Lock Screen",
      authRequired: true,
    },
    component: () => import("../views/auth/lockscreen/cover"),
  },
  {
    path: "/auth/twostep-basic",
    name: "twostep-basic",
    meta: {
      title: "Two Step Auth",
      authRequired: true,
    },
    component: () => import("../views/auth/twostep/basic"),
  },
  {
    path: "/auth/twostep-cover",
    name: "twostep-cover",
    meta: {
      title: "Two Step Auth",
      authRequired: true,
    },
    component: () => import("../views/auth/twostep/cover"),
  },
  {
    path: "/auth/404",
    name: "404",
    meta: {
      title: "Error 404",
      authRequired: true,
    },
    component: () => import("../views/auth/errors/404"),
  },
  {
    path: "/auth/500",
    name: "500",
    meta: {
      title: "Error 500",
      authRequired: true,
    },
    component: () => import("../views/auth/errors/500"),
  },
  {
    path: "/auth/404-basic",
    name: "404-basic",
    meta: {
      title: "Error 404",
      authRequired: true,
    },
    component: () => import("../views/auth/errors/404-basic"),
  },
  {
    path: "/auth/404-cover",
    name: "404-cover",
    meta: {
      title: "Error 404",
      authRequired: true,
    },
    component: () => import("../views/auth/errors/404-cover"),
  },
  {
    path: "/auth/ofline",
    name: "ofline",
    meta: {
      title: "Offline",
      authRequired: true,
    },
    component: () => import("../views/auth/errors/ofline"),
  },
  {
    path: "/auth/logout-basic",
    name: "logout-basic",
    meta: {
      title: "Logout",
      authRequired: true,
    },
    component: () => import("../views/auth/logout/basic"),
  },
  {
    path: "/auth/logout-cover",
    name: "logout-cover",
    meta: {
      title: "Logout",
      authRequired: true,
    },
    component: () => import("../views/auth/logout/cover"),
  },
  {
    path: "/auth/success-msg-basic",
    name: "success-msg-basic",
    meta: {
      title: "Success Message",
      authRequired: true,
    },
    component: () => import("../views/auth/success-msg/basic"),
  },
  {
    path: "/auth/success-msg-cover",
    name: "success-msg-cover",
    meta: {
      title: "Success Message",
      authRequired: true,
    },
    component: () => import("../views/auth/success-msg/cover"),
  },
];
