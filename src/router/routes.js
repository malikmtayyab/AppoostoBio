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
  // New Pages Under the dashboard
  {
    path: "/",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/index"),
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
  // ai

  {
    path: "/ai/images",
    name: "images",
    meta: {
      title: "images",
      authRequired: true,
    },
    component: () => import("../views/ai/images/index"),
  },
  {
    path: "/ai/templates",
    name: "templates",
    meta: {
      title: "templates",
      authRequired: true,
    },
    component: () => import("../views/ai/templates/index"),
  },
  {
    path: "/ai/assistant",
    name: "assistant",
    meta: {
      title: "Assistant",
      authRequired: true,
    },
    component: () => import("../views/ai/assistant/index"),
  },
  {
    path: "/ai/speech-to-text",
    name: "speech-to-text",
    meta: {
      title: "VCard Links",
      authRequired: true,
    },
    component: () => import("../views/ai/speech-to-text/index"),
  },

  // ai ended
  // Pages
  {
    path: "/pages/landing-pages",
    name: "landing-pages",
    meta: {
      title: "Event Links",
      authRequired: true,
    },
    component: () => import("../views/pages/landing-pages/index"),
  },
  {
    path: "/pages/action-pages",
    name: "action-pages",
    meta: {
      title: "Static Sites",
      authRequired: true,
    },
    component: () => import("../views/pages/action-pages/index"),
  },
  {
    path: "/pages/hosting",
    name: "hosting",
    meta: {
      title: "Static Sites",
      authRequired: true,
    },
    component: () => import("../views/pages/hosting/index"),
  },
  // Pages Ended
  // Links
  {
    path: "/links/short-link",
    name: "short-link",
    meta: {
      title: "short-link",
      authRequired: true,
    },
    component: () => import("../views/links/short-link/index"),
  },
  {
    path: "/links/file-link",
    name: "file-link",
    meta: {
      title: "file-link",
      authRequired: true,
    },
    component: () => import("../views/links/file-link/index"),
  },
  {
    path: "/links/vcard-link",
    name: "vcard-link",
    meta: {
      title: "vcard-link",
      authRequired: true,
    },
    component: () => import("../views/links/vcard-link/index"),
  },
  {
    path: "/links/event-link",
    name: "Tools",
    meta: { title: "Tools", authRequired: true },
    component: () => import("../views/links/event-link/index"),
  },
  // Links End

  // Tools
  {
    path: "/tools/calendar",
    name: "Calendar",
    meta: { title: "Calendar", authRequired: true },
    component: () => import("../views/tools/calendar/index"),
  },
  {
    path: "/tools/file-manager",
    name: "File Manager",
    meta: { title: "File Manager", authRequired: true },
    component: () => import("../views/tools/file-manager/index"),
  },
  {
    path: "/tools/qr-code",
    name: "qr-code",
    meta: {
      title: "QR Code",
      authRequired: true,
    },
    component: () => import("../views/tools/qr-code/index"),
  },
  {
    path: "/tools/other-tools",
    name: "other-tools",
    meta: {
      title: "Other tools",
      authRequired: true,
    },
    component: () => import("../views/tools/other-tools/index"),
  },

  // Tools Ended
  // Data&Payments
  {
    path: "/data-and-payments/data",
    name: "data",
    meta: {
      title: "Data",
      authRequired: true,
    },
    component: () => import("../views/data-and-payments/data/index"),
  },
  {
    path: "/data-and-payments/payments",
    name: "Payments",
    meta: { title: "Payments", authRequired: true },
    component: () => import("../views/data-and-payments/payments/index"),
  },
  // Data&Payments Ended
  {
    path: "/faqs",
    name: "Faqs",
    meta: { title: "Setting", authRequired: true },
    component: () => import("../views/faqs"),
  },
  {
    path: "/dashboard/profile-setting",
    name: "profile-setting",
    meta: { title: "Setting", authRequired: true },
    component: () => import("../views/dashboard/profile/setting"),
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
