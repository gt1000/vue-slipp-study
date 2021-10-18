import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/views/LoginPage";
import Signup from "@/views/Signup";
import MainPage from "../views/MainPage";

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUP',
    component: Signup
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
