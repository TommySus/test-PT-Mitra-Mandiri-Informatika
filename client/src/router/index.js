import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddDataPage from '../views/AddDataPage.vue'
import EditDataPage from '../views/EditDataPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addKaryawan',
    name: 'AddPage',
    component: AddDataPage
  },
  {
    path: '/editKaryawan/:id',
    name: 'EditPage',
    component: EditDataPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
