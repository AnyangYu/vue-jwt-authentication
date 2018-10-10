import Vue from 'vue'
import App from './components/App.vue'
import RYHData from './components/RYHData.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

export var router = new VueRouter()

router.map({
  '/ryhdata': {
    component: RYHData
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  }
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')

