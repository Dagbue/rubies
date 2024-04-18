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
    component: () => import(/* webpackChunkName: "personalBankingOpenAccount" */ '../views/PersonalBankingOpenAccountView.vue')
  },
  {
    path: '/personalBankingPayments',
    name: 'personalBankingPayments',
    component: () => import(/* webpackChunkName: "personalBankingPayments" */ '../views/PersonalBankingPaymentsView.vue')
  },
  {
    path: '/chatsMessagingView',
    name: 'chatsMessagingView',
    component: () => import(/* webpackChunkName: "chatsMessagingView" */ '../views/ChatsMessagingView.vue')
  },
  {
    path: '/cardView',
    name: 'cardView',
    component: () => import(/* webpackChunkName: "cardView" */ '../views/CardView.vue')
  },
  {
    path: '/businessBanking',
    name: 'businessBanking',
    component: () => import(/* webpackChunkName: "businessBanking" */ '../views/BusinessBankingView.vue')
  },
  {
    path: '/smeView',
    name: 'smeView',
    component: () => import(/* webpackChunkName: "smeView" */ '../views/SmeView.vue')
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: () => import(/* webpackChunkName: "contactView" */ '../views/ContactView.vue')
  },
  {
    path: '/faqView',
    name: 'faqView',
    component: () => import(/* webpackChunkName: "faqView" */ '../views/FaqView.vue')
  },
  {
    path: '/termsView',
    name: 'termsView',
    component: () => import(/* webpackChunkName: "faqView" */ '../views/TermsView.vue')
  },
  {
    path: '/privacyPolicyView',
    name: 'privacyPolicyView',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicyView.vue')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
