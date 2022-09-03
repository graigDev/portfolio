import { createRouter, createWebHistory } from 'vue-router'
const Welcome = () => import(/* webpackChunkName: "WelcomePage" */ '../views/WelcomePage')
const Footer = () => import(/* webpackChunkName: "FooterBlock" */ '../components/common/FooterBlock')

const routes = [
  {
    path: '/',
    name: 'Welcome',
    components: { default: Welcome, footer: Footer }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
