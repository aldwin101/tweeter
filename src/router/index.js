import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginSignup from '../views/LoginSignup.vue'
import Discover from '../views/Discover.vue'
import Feed from '../views/Feed.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginSignup',
    component: LoginSignup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
  path: '/discover',
  name: 'Discover',
  component: Discover
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/UserProfile/:userId',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
