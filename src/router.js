import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/uploadinfo",
          name: "uploadinfo",
          component: () => import("@/view/pages/kmhs/UploadInformasi.vue")
        },
        {
          path: "/validasiaktas",
          name: "validasiaktas",
          component: () => import("@/view/pages/kmhs/ValidasiAktivitas.vue")
        },
        {
          path: "/pencarianaktas",
          name: "pencarianaktas",
          component: () => import("@/view/pages/kmhs/PencarianAktivitas.vue")
        },
        {
          path: "/laporaktas",
          name: "laporaktas",
          component: () => import("@/view/pages/kmhs/LaporanAktivitas.vue")
        },
        {
          path: "/detailaktas",
          name: "detailaktas",
          component: () => import("@/view/pages/kmhs/DetailAktas.vue")
        },
        {
          path: "/usermanage",
          name: "usermanage",
          component: () => import("@/view/pages/kmhs/ManageUser.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/view/pages/auth/Login-1")
    },
    {
      // the 404 route, when none of the above matches
      path: "*",
      name: "404",
      component: () => import("@/view/pages/error/Error-3.vue")
    }
  ]
});
