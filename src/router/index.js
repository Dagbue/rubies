import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/personalBankingOpenAccount',
    name: 'personalBankingOpenAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalBankingOpenAccountView.vue')
  },
  {
    path: '/personalBankingPayments',
    name: 'personalBankingPayments',
    component: () => import(/* webpackChunkName: "about" */ '../views/PersonalBankingPaymentsView.vue')
  },
  {
    path: '/chatsMessagingView',
    name: 'chatsMessagingView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatsMessagingView.vue')
  },
  {
    path: '/cardView',
    name: 'cardView',
    component: () => import(/* webpackChunkName: "about" */ '../views/CardView.vue')
  },
  {
    path: '/businessBanking',
    name: 'businessBanking',
    component: () => import(/* webpackChunkName: "about" */ '../views/BusinessBankingView.vue')
  },
  {
    path: '/smeView',
    name: 'smeView',
    component: () => import(/* webpackChunkName: "about" */ '../views/SmeView.vue')
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/faqView',
    name: 'faqView',
    component: () => import(/* webpackChunkName: "about" */ '../views/FaqView.vue')
  },
  {
    path: '/termsView',
    name: 'termsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermsView.vue')
  },
]

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
