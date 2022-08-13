// import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: "首页"
    },
    component: () => import("../views/IndexView.vue")
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/ServiceView.vue'),
  },
  {
    path: '/party',
    name: 'party',
    component: () => import('../views/PartyView.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue'),
  },
  {
    path: "/news_detail/:id",
    name: "news_detail",
    component: () => import("../views/NewsDetail.vue")
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/MineView.vue'),
    children: [
      {
        path: "",
        name: "",
        component: () => import("../views/LoginView.vue")
      }, {
        path: "login",
        name: "login",
        component: () => import("../views/LoginView.vue")
      }, {
        path: "register",
        name: "register",
        component: () => import("../views/RegisterView.vue")
      }]
  },
  {
    path: '/park/index',
    name: 'park',
    component: () => import('../views/ParkView.vue'),
  },
  {
    path: '/metro_query/index',
    name: 'metro_query',
    component: () => import('../views/MetroView.vue'),
  },
  {
    path: '/bus_query/custom_shuttle',
    name: 'bus_query',
    component: () => import('../views/BusView.vue'),
  },
  {
    path: '/outpatient/hospitalList',
    name: 'outpatient',
    component: () => import('../views/OutpatientView.vue'),
  },
  {
    path: '/traffic/index',
    name: 'traffic',
    component: () => import('../views/TrafficVIew.vue'),
  },
  {
    path: '/living_expenses/index',
    name: 'living_expenses',
    component: () => import('../views/LivingExpenses.vue'),
  },
  {
    path: '/takeout/index',
    name: 'takeout',
    component: () => import('../views/TakeOut.vue'),
  },
  {
    path: '/house/index',
    name: 'house',
    component: () => import('../views/HouseView.vue'),
  },
  {
    path: "/house_detail/:id",
    name: "house_detail",
    component: () => import("../views/HouseDetail.vue")
  },
  {
    path: '/movie/index',
    name: 'movie',
    component: () => import('../views/MovieView.vue'),
  },
  {
    path: '/user_edit',
    name: 'user_edit',
    component: () => import('../views/UserEdit.vue'),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/DetailFilm.vue")
  },
  {
    path: "/detail_soon/:id",
    name: "detail_soon",
    component: () => import("../views/DetailSoon.vue")
  },
  {
    path: "/userinfo",
    name: "userinfo",
    component: () => import("../views/UserInfo.vue")
  },
  {
    path: "/cinema",
    name: "cinema",
    component: () => import("../views/CinemaView.vue")
  },
  {
    path: "/cinema_detail/:id",
    name: "cinema_detail",
    component: () => import("../views/CinemaDetail.vue")
  },

]

const router = new VueRouter({
  routes
})

export default router
